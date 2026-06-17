import json
from app import create_app
from extensions import db
from models import Product

app = create_app()

with app.app_context():
    with open("../public/js/menu-data.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    updated = 0

    for item in data["items"]:
        product = Product.query.filter_by(id=item["id"]).first()

        if product:
            product.image = item["image"]
            product.image_fit = item.get("imageFit", "cover")
            updated += 1

    db.session.commit()
    print("Updated images:", updated)