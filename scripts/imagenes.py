"""Genera los iconos PNG y las imágenes para redes. Se lanza a mano: python scripts/imagenes.py"""
from pathlib import Path
from playwright.sync_api import sync_playwright

PUB = Path(__file__).resolve().parent.parent / "public"
SVG = (PUB / "favicon.svg").read_text(encoding="utf-8")
CRANE = SVG.replace('<circle cx="256" cy="256" r="256" fill="#FDF6F6"/>', "")
FONT = (PUB / "fonts/zen-maru-gothic-latin-700-normal.woff2").as_uri()
OG = """<style>@font-face{{font-family:Z;src:url('{font}')}}*{{margin:0}}
body{{width:1200px;height:630px;background:#FDF6F6;color:#3A2A38;font-family:Z;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box;position:relative;overflow:hidden}}
.m{{display:flex;align-items:center;gap:16px;font-size:40px;margin-bottom:40px}} .m svg{{width:72px;height:72px}}
h1{{font-size:84px;line-height:1.14;max-width:930px;font-weight:700}}
.r{{position:absolute;right:-120px;bottom:-200px;width:520px;height:520px;border-radius:50%;background:#FBBAC2}}
</style><div class=r></div><div class=m>{crane}tokimichi</div><h1>{title}</h1>"""
with sync_playwright() as p:
    b = p.chromium.launch()
    for size, name in ((48, "favicon-48"), (180, "apple-touch-icon"), (192, "icon-192"), (512, "icon-512")):
        pg = b.new_page(viewport={"width": size, "height": size})
        pg.set_content(f'<style>*{{margin:0}}svg{{display:block;width:{size}px;height:{size}px}}</style>{SVG}')
        pg.screenshot(path=PUB / f"{name}.png", omit_background=True)
    for lang, title in (("es", "Revive tus recuerdos más felices."), ("en", "Relive your happiest memories.")):
        path = PUB / f"og-{lang}.html"
        path.write_text(OG.format(font=FONT, crane=CRANE, title=title), encoding="utf-8")
        pg = b.new_page(viewport={"width": 1200, "height": 630})
        pg.goto(path.as_uri())
        pg.wait_for_timeout(400)
        pg.screenshot(path=PUB / f"og-{lang}.png")
        path.unlink()
    b.close()
