  
import os
from flask_admin import Admin
from .models import db, User, PlanTemplate, TemplateItem, SubscriptionPlan,Subscription, Payment, Event, EventSignup, SupportTicket, PlanTemplateItem, NutritionEntry, TrainingEntry
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(PlanTemplate, db.session))
    admin.add_view(ModelView(TemplateItem, db.session))
    admin.add_view(ModelView(PlanTemplateItem, db.session))
    admin.add_view(ModelView(SubscriptionPlan, db.session))
    admin.add_view(ModelView(Subscription, db.session))
    admin.add_view(ModelView(Payment, db.session))
    admin.add_view(ModelView(Event, db.session))
    admin.add_view(ModelView(EventSignup, db.session))
    admin.add_view(ModelView(SupportTicket, db.session))
    admin.add_view(ModelView(NutritionEntry, db.session))
    admin.add_view(ModelView(TrainingEntry, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))