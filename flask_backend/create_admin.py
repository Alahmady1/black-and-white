from app import create_app
from extensions import db, bcrypt
from models import Admin

app = create_app()

with app.app_context():
    admin = Admin.query.filter_by(username="Ak47").first()

    if not admin:
        admin = Admin(
            username="Ak47",
            password_hash=bcrypt.generate_password_hash("black&white2027").decode("utf-8")
        )
        db.session.add(admin)
        db.session.commit()

print("Ak47 created")