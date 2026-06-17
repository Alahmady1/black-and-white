import json
import os
from extensions import db, bcrypt
from models import Admin, Category, Product

def seed_database():
    admin = Admin.query.first()
    if admin:
        admin.username = 'Alahmady101'
        admin.password_hash = bcrypt.generate_password_hash('black&white2027').decode('utf-8')
    else:
        admin = Admin(
            username='Alahmady101',
            password_hash=bcrypt.generate_password_hash('black&white2027').decode('utf-8')
        )
        db.session.add(admin)
    
    # 2. Load Categories and Products from JSON
    # Path to the Next.js public json file (for initial seed)
    json_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'public', 'js', 'menu-data.json')
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
            categories_dict = {}
            for cat_name in data.get('categories', []):
                cat = Category.query.filter_by(name=cat_name).first()
                if not cat:
                    cat = Category(name=cat_name)
                    db.session.add(cat)
                    db.session.flush() # to get the id
                categories_dict[cat_name] = cat.id
                
            for item in data.get('items', []):
                cat_id = categories_dict.get(item.get('category'))
                if cat_id:
                    prod = Product.query.filter_by(id=item.get('id')).first()
                    if not prod:
                        prod = Product(
                            id=item.get('id'),
                            category_id=cat_id,
                            name=item.get('name'),
                            description=item.get('description', ''),
                            price=item.get('price'),
                            image=item.get('image', ''),
                            image_fit=item.get('imageFit', 'cover'),
                            object_position=item.get('objectPosition', ''),
                            is_available=True,
                            stock_quantity=100
                        )
                        db.session.add(prod)
                    
    db.session.commit()
    print("Database seeded successfully.")
