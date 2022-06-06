# main.py

from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_login import login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User

from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.name)

@main.route('/profile/edit', methods=['GET', 'POST'])
@login_required
def edit_profile():
    passauth = False

    if request.method == "POST":
        Name = request.form.get('nameEdit')
        Email = request.form.get('emailEdit')
        Cpass = request.form.get('passwordC')
        Npass = request.form.get('passwordN')

        if check_password_hash(current_user.password, Cpass):
            passauth = True
            if passauth == True:
                userPass = User.query.filter_by(password = current_user.password).first()
                userPass.password = generate_password_hash(Npass, method='sha256')
                db.session.commit()
                return redirect(url_for('main.profile'))
        elif Cpass != current_user.password:
            flash('Current password is incorrect') 
            return redirect(url_for('main.edit_profile'))  
            
        
           
        user = User.query.filter_by(name=current_user.name, email=current_user.email).first()
        user.name = Name
        user.email = Email
        db.session.commit()
        return render_template("Profile.html")

    else:
        return render_template('editProfile.html', name=current_user.name, email=current_user.email)


