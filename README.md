# Your Day

Live Link: https://yourday.herokuapp.com/
-Backend Repo: https://github.com/krezman/Capstone-BE
-Backend Deployment: https://yourday-backend.herokuapp.com/

I started this project with the hopes of doing it in stages to eventually build a really dynamic wedding vendor search app. The idea will build over time but this first version is supposed to serve as a way for all types of wedding vendors to create an account and start sharing thier content for poteintial new clients to see.

# Technologies used:
- Flask
- React
- SQLite/Postgresql
- FlexBox
- Heroku
- Material UI
- AOS

# Installation
Necessary to install: Flask, React, Material UI, Heroku, Peewee, SQLite, CORS, Dotenv, Gunicorn, AOS

# Approach
- Developed full CRUD operations using Flask.
- Fetched data from external API and reviewed data structure using Postman
- Developed frontend components and connected to the backend.
- Implemented user authorization, by using state in React.
- Deployed online and accessible to the public via Heroku

# Models
Class User(UserMixin, Model):
username = CharField(unique = True)
email = CharField(unique = True)
password = CharField()
vendor_name = CharField()
vendor_type = IntegerField(options)
location = CharField()
profile_photo = CharField()
bio = CharField(max_length = 500)

Class Posts(Model):
photo = CharField()
text = CharField(max_length = 200)
date_created = DateTimeField(default=datetime.datetime.now)
post_owner = ForeignKeyField(User, backref='database_name')

# Routes
Post Routes:
/post/form - GET form for new post Route
/post/create - POST creating post Route
/post/id/show - GET showing the entire post
/post/id/edit - GET Pulling up created post Route
/post/id - PUT Updating my post Route
/post/id - DELETE delete post Route
/post/author/id - GET showing the account page

User Routes:
/user/register - POST Register Route
/user/login - POST Login Route
/user/logout - DELETE Logout Route

# User Stories
As a user I'd like to....
- Create an account with a username, email and password that will become hashed
- Create a profile that is associated with my account
- Create posts that are associated with my account for which I can edit and delete these posts if I so choose
- View other accounts profiles/posts if I am logged in

# Intitial Wirefames
https://media.git.generalassemb.ly/user/46658/files/84ebc142-9c75-4b1f-9760-62287fac5004
https://media.git.generalassemb.ly/user/46658/files/39f6a2aa-fd54-45e1-8e06-f371fe57352a
https://media.git.generalassemb.ly/user/46658/files/aefa598e-4b40-4807-a770-406615ea42d4
https://media.git.generalassemb.ly/user/46658/files/c89943ca-74df-44b7-b840-2f69b9b36fa1
https://media.git.generalassemb.ly/user/46658/files/8fe33ed5-1bcc-465e-a123-6e8bdcd53998
https://media.git.generalassemb.ly/user/46658/files/43c15e80-52ff-453e-8a36-e49145bbf09a

# Final Results
![image](https://github.com/krezman/capstone-frontend/assets/119069145/be46d74a-d5e1-41e1-8097-31e852ed6623)
![image](https://github.com/krezman/capstone-frontend/assets/119069145/0bb8849f-3985-4142-beb5-a96aaf88b26d)
![image](https://github.com/krezman/capstone-frontend/assets/119069145/cd2d2b59-ccf3-4bce-acd9-8c1684f4c5ad)
![image](https://github.com/krezman/capstone-frontend/assets/119069145/f741b5e0-3e3d-4d81-8501-9832dbcb5f4e)
![image](https://github.com/krezman/capstone-frontend/assets/119069145/b2cc5263-fce2-441f-8235-d34f8d9c4aa7)
![image](https://github.com/krezman/capstone-frontend/assets/119069145/4078e538-c13b-4f6e-8b68-950c673804c0)

# What is next?
- I really want to add commenting to posts as a feature and I don't think that would be too difficult
- I would like to also implement a photo uploader
- Add a new user model for people that aren't vendors
- Add chatting
- Eventually add a google maps API for better loacting people/ searching for them





