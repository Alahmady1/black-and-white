from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_backend.config import Config
from flask_backend.extensions import db, bcrypt, login_manager
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    CORS(app)
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    
    # Register blueprints
    from flask_backend.routes.api import api_bp
    from flask_backend.routes.admin import admin_bp
    from flask_backend.routes.auth import auth_bp
    
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(admin_bp, url_prefix='/admin')
    app.register_blueprint(auth_bp, url_prefix='/auth')
    
    @app.route("/flavors/<path:filename>")
    def uploaded_flavors(filename):
        return send_from_directory("public/flavors", filename)
    @app.route("/test-route")
    def test_route():
     return "ROUTE OK"
   # Create tables
    with app.app_context():
        db.create_all()

        from flask_backend.models import Admin, Product
        from flask_backend.seed import seed_database

        if Product.query.count() == 0:
            seed_database()

        admin = Admin.query.filter_by(username="Ak47").first()
        if not admin:
            admin = Admin(
                username="Ak47",
                password_hash=bcrypt.generate_password_hash("black&white2027").decode("utf-8")
            )
            db.session.add(admin)
            db.session.commit()

    return app
app = create_app()

if __name__ == '__main__':
   
    app.run(host='0.0.0.0', port=5000, debug=True)
