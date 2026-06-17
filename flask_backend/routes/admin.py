from flask import Blueprint, render_template, request, redirect
from flask_login import login_required, login_user, logout_user
from flask_backend.extensions import db, bcrypt
from flask_backend.models import Admin, Product, Category, Customer, Gift
import uuid
import os
from werkzeug.utils import secure_filename
admin_bp = Blueprint('admin', __name__)

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
UPLOAD_FOLDER = os.path.join(BASE_DIR, "public", "flavors")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def save_uploaded_image():
    file = request.files.get("image_file")

    if file and file.filename:
        ext = file.filename.rsplit(".", 1)[-1].lower()
        filename = f"upload-{uuid.uuid4().hex[:8]}.{ext}"

        file.save(os.path.join(UPLOAD_FOLDER, filename))

        return f"/flavors/{filename}"

    return request.form.get("old_image") or ""

@admin_bp.route('/products')
@login_required
def products():
    products_list = Product.query.all()
    return render_template('admin/products.html', products=products_list)

@admin_bp.route('/products/add', methods=['GET', 'POST'])

def add_product():
    first_category = Category.query.first()
    if request.method == 'POST':
        product = Product(
        id="prod-" + str(uuid.uuid4())[:8],
        category_id=first_category.id,
        name=request.form.get("name"),
        description=request.form.get("description") or "",
        price=float(request.form.get("price") or 0),
        image=save_uploaded_image(),
        image_fit="cover",
        object_position="",
        stock_quantity=int(request.form.get("stock_quantity") or 100),
        is_available=True
    )
        
        db.session.add(product)
        db.session.commit()
        return redirect('/admin/products')

    return render_template('admin/product_form.html', product=None)

@admin_bp.route('/products/<product_id>/edit', methods=['GET', 'POST'])
def edit_product(product_id):
    product = Product.query.get_or_404(product_id)

    if request.method == 'POST':
        product.name = request.form.get('name')
        product.price = float(request.form.get('price') or 0)
        product.image = save_uploaded_image()
        product.description = request.form.get("description") or ""
        product.stock_quantity = int(request.form.get('stock_quantity') or 100)
        db.session.commit()
        return redirect('/admin/products')

    return render_template('admin/product_form.html', product=product)

@admin_bp.route('/categories')
@login_required
def categories():
    cats = Category.query.all()
    return render_template('admin/categories.html', categories=cats)


@admin_bp.route('/customers')
@login_required
def customers():
    users = Customer.query.all()
    return render_template('admin/customers.html', customers=users)


@admin_bp.route('/gifts')
@login_required
def gifts():
    all_gifts = Gift.query.all()
    return render_template('admin/gifts.html', gifts=all_gifts)

@admin_bp.route('/products/<product_id>/delete', methods=['POST'])
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return redirect('/admin/products')


@admin_bp.route('/gifts/<int:gift_id>/redeem', methods=['POST'])
def redeem_gift(gift_id):
    gift = Gift.query.get_or_404(gift_id)
    from datetime import datetime
    gift.redeemed_at = datetime.utcnow()
    db.session.commit()
    return redirect('/admin/gifts')

@admin_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        admin = Admin.query.filter_by(username=username).first()

        if admin and bcrypt.check_password_hash(admin.password_hash, password):
            login_user(admin)
            return redirect('/admin/dashboard')

        flash("Username or password is incorrect", "error")
        return render_template("admin/login.html")

    return render_template("admin/login.html")

    return render_template('admin/login.html')
@admin_bp.route('/orders')
def orders():
    all_orders = Order.query.all()
    return render_template('admin/orders.html', orders=all_orders)

@admin_bp.route('/orders/<int:order_id>')
def order_details(order_id):
    order = Order.query.get_or_404(order_id)
    return render_template('admin/order_details.html', order=order)

@admin_bp.route('/logout')
def logout():
    logout_user()
    return redirect('/admin/login')

@admin_bp.route('/dashboard')
def dashboard():
    total_orders = Order.query.count()
    total_revenue = db.session.query(db.func.sum(Order.total_price)).scalar() or 0
    total_customers = Customer.query.count()

    from datetime import date
    today = date.today()

    today_orders = Order.query.filter(db.func.date(Order.created_at) == today).count()
    today_revenue = db.session.query(db.func.sum(Order.total_price)).filter(
        db.func.date(Order.created_at) == today
    ).scalar() or 0

    recent_orders = Order.query.order_by(Order.created_at.desc()).limit(5).all()

    return render_template(
        'admin/dashboard.html',
        total_orders=total_orders,
        total_revenue=total_revenue,
        total_customers=total_customers,
        today_orders=today_orders,
        today_revenue=today_revenue,
        recent_orders=recent_orders
    )
    