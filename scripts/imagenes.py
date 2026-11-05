"""Genera los iconos, el favicon.ico y las imágenes para redes. Se lanza a mano: python scripts/imagenes.py

Las de las landings salen del h1 de src/landings.ts: si cambias un h1, vuelve a lanzarlo.
"""
import ast
import re
from html import escape
from io import BytesIO
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PUB = ROOT / "public"
SVG = (PUB / "favicon.svg").read_text(encoding="utf-8")
CRANE = SVG.replace('<circle cx="256" cy="256" r="256" fill="#FDF6F6"/>', "")
FONT = (PUB / "fonts/zen-maru-gothic-latin-700-normal.woff2").as_uri()
OG = """<style>@font-face{{font-family:Z;src:url('{font}')}}*{{margin:0}}
body{{width:1200px;height:630px;background:#FDF6F6;color:#3A2A38;font-family:Z;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box;position:relative;overflow:hidden}}
.m{{display:flex;align-items:center;gap:16px;font-size:40px;margin-bottom:40px}} .m svg{{width:72px;height:72px}}
h1{{font-size:{size}px;line-height:1.14;max-width:930px;font-weight:700;position:relative}}
.k{{background:linear-gradient(180deg,transparent 58%,#FBBAC2 58%,#FBBAC2 92%,transparent 92%);border-radius:8px;padding:0 6px;box-decoration-break:clone;-webkit-box-decoration-break:clone}}
.r{{position:absolute;right:-120px;bottom:-200px;width:520px;height:520px;border-radius:50%;background:{circle}}}
</style><div class=r></div><div class=m>{crane}tokimichi</div><h1>{title}</h1>"""


def landing_titles():
    """(lang, key, [antes, marcado, después]) de cada landing, leído de src/landings.ts."""
    lang = key = None
    for line in (ROOT / "src/landings.ts").read_text(encoding="utf-8").splitlines():
        if m := re.match(r"^\t(es|en): \{", line):
            lang = m.group(1)
        elif m := re.match(r"^\t\t(\w+): \{", line):
            key = m.group(1)
        elif lang and key and (m := re.match(r"^\t\t\th1Parts: (\[.*\]),$", line)):
            yield lang, key, ast.literal_eval(m.group(1))


def og(browser, out, parts, circle="#CFEFE2"):
    before, mark, after = parts
    title = f"{escape(before)}<span class=k>{escape(mark)}</span>{escape(after)}" if mark else escape(before)
    size = 84 if len("".join(parts)) <= 40 else 68
    tmp = PUB / "og-tmp.html"
    tmp.write_text(OG.format(font=FONT, crane=CRANE, title=title, size=size, circle=circle), encoding="utf-8")
    pg = browser.new_page(viewport={"width": 1200, "height": 630})
    pg.goto(tmp.as_uri())
    pg.wait_for_timeout(400)
    out.parent.mkdir(exist_ok=True)
    pg.screenshot(path=out)
    pg.close()
    tmp.unlink()


with sync_playwright() as p:
    b = p.chromium.launch()
    for size, name in ((48, "favicon-48"), (180, "apple-touch-icon"), (192, "icon-192"), (512, "icon-512")):
        pg = b.new_page(viewport={"width": size, "height": size})
        pg.set_content(f'<style>*{{margin:0}}svg{{display:block;width:{size}px;height:{size}px}}</style>{SVG}')
        pg.screenshot(path=PUB / f"{name}.png", omit_background=True)
        pg.close()
    # favicon.ico: lo piden navegadores y bots sin mirar el <link>. 16, 32 y 48 px.
    pg = b.new_page(viewport={"width": 256, "height": 256})
    pg.set_content(f'<style>*{{margin:0}}svg{{display:block;width:256px;height:256px}}</style>{SVG}')
    big = Image.open(BytesIO(pg.screenshot(omit_background=True))).convert("RGBA")
    big.save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    pg.close()
    for lang, title in (("es", "Revive tus recuerdos más felices."), ("en", "Relive your happiest memories.")):
        og(b, PUB / f"og-{lang}.png", [title, "", ""], circle="#FBBAC2")
    for lang, key, parts in landing_titles():
        og(b, PUB / "og" / f"{lang}-{key}.png", parts)
    b.close()
