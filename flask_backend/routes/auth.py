import re
from flask import Blueprint, request, jsonify
from flask_backend.extensions import db, bcrypt
from flask_backend.models import Customer, Gift

auth_bp = Blueprint('auth', __name__)

def is_valid_egyptian_phone(phone):
    return bool(re.match(r'^(010|011|012|015)\d{8}$', phone))

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    password = data.get('password')
    
    if not name or not phone or not password:
        return jsonify({"error": "Missing fields"}), 400
        
    if not is_valid_egyptian_phone(phone):
        return jsonify({"error": "Invalid Egyptian phone number"}), 400
        
    if Customer.query.filter_by(phone=phone).first():
        return jsonify({"error": "Phone number already registered"}), 400
        
    pw_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    customer = Customer(name=name, phone=phone, password_hash=pw_hash)
    db.session.add(customer)
    db.session.flush() # get id
    
    # Reward: 1 free Lemon Mint on first successful registration
    gift = Gift(customer_id=customer.id, gift_name="Lemon Mint")
    db.session.add(gift)
    
    db.session.commit()
    return jsonify({"message": "Registration successful", "customer_id": customer.id, "gift": "Lemon Mint"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    phone = data.get('phone')
    password = data.get('password')
    
    customer = Customer.query.filter_by(phone=phone).first()
    if customer and bcrypt.check_password_hash(customer.password_hash, password):
        return jsonify({"message": "Login successful", "customer_id": customer.id, "name": customer.name}), 200
        
    return jsonify({"error": "Invalid credentials"}), 401
