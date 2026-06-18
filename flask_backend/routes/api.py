from flask import Blueprint, jsonify, request
from flask_backend.extensions import db
from flask_backend.models import Product, Category, Order, OrderItem
import uuid

api_bp = Blueprint('api', __name__)

@api_bp.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.filter_by(is_active=True).all()
    return jsonify([cat.name for cat in categories])

@api_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{
        "id": p.id,
        "name": p.name,
        "category": p.category.name if p.category else "",
        "price": p.price,
        "image": p.image,
        "description": p.description or "",
        "imageFit": p.image_fit,
        "objectPosition": p.object_position
    } for p in products])

@api_bp.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    items = data.get('items', [])
    total_price = data.get('total_price', 0)
    customer_id = data.get('customer_id') # Can be null
    source = data.get('source', 'web')
    notes = data.get('notes', '')
    
    import datetime
    order_number = f"BW-{datetime.datetime.now().strftime('%Y%m%d')}-{str(uuid.uuid4())[:8].upper()}"
    
    order = Order(
        order_number=order_number,
        customer_id=customer_id,
        total_price=total_price,
        source=source,
        notes=notes,
        payment_method='cash'
    )
    db.session.add(order)
    db.session.flush() # get id
    
    for item in items:
        if item.get("id") == "gift-lemon-mint":
          continue
        # We assume frontend sends the product id, name, price, quantity
        order_item = OrderItem(
            order_id=order.id,
            product_id=item.get('id'),
            item_name=item.get('name'),
            item_price=item.get('price'),
            quantity=item.get('quantity')
        )
        db.session.add(order_item)
        
        # update stock
        prod = Product.query.get(item.get('id'))
        if prod and prod.stock_quantity >= item.get('quantity'):
            prod.stock_quantity -= item.get('quantity')
            
    db.session.commit()
    
    return jsonify({
        "message": "Order created successfully",
        "order_number": order.order_number,
        "order_id": order.id
    }), 201
