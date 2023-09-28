from flask import Flask, redirect, render_template
import firebase_admin
from firebase_admin import db
import os

#do not upload to github
cred_obj = firebase_admin.credentials.Certificate('./ServiceAccountKey.json')

#database URL from Firebase project
default_app = firebase_admin.initialize_app(cred_obj,  {
	'databaseURL': 'https://url-shortner-351f8-default-rtdb.firebaseio.com/'
	})

#initialize FLASK app to serve client app
app = Flask(__name__, static_folder='./build/static', template_folder="./build" )

#an instance of Flask app
@app.route("/")
def hello_world():
    return redirect("/app")

@app.route("/app")
def homepage():
    return render_template('index.html')

#database and redirecting URL
@app.route('/<path:generatedKey>', methods=['GET'])
def fetch_from_firebase(generatedKey):
    ref = db.reference("/"+ generatedKey)
    data = ref.get()
    #edge case
    if not data:
        return '404 not found'
    else:
        longURL = data['longURL']
        return redirect(longURL)