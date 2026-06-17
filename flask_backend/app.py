from flask import Flask
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
    
    # Create tables
    with app.app_context():
        db.create_all()
        # Seed if empty
     #   from flask_backend.seed import seed_database
       # seed_database()
        
    return app
app = create_app()

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)
