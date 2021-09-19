import pyrebase
import pandas as pd

firebaseConfig = {'apiKey': "AIzaSyDkRY30sGKFcGTRS_lJIOtJSt75hylz3B4",
                  'authDomain': "connex-64bbe.firebaseapp.com",
                  'databaseURL': "https://connex-64bbe-default-rtdb.firebaseio.com",
                  'projectId': "connex-64bbe",
                  'storageBucket': "connex-64bbe.appspot.com",
                  'messagingSenderId': "828129360946",
                  'appId': "1:828129360946:web:70d510868b1091147f502b",
                  'measurementId': "G-58RE9EMKYJ"}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

# # Login
# email = input("Email: ")
# password = input("Password: ")
#
# try:
#     auth.sign_in_with_email_and_password(email, password)
#     print("Signed In")
# except:
#     print("Invalid Password")
#
# # Sign-Up
# email = input("Email: ")
# password1 = input("Password: ")
# password2 = input("Confirm Password: ")
# if password1 == password2:
#     try:
#         auth.create_user_with_email_and_password(email, password)
#     except:
#         print("Email Already Exists")
# else:
#     print("Passwords don't match")

# add data to db
# db = firebase.database()
# data = {'age': 40, 'address': 'New York', 'employed': True, 'name': "Fuad Choudhury"}
# db.child('Users').push(data)

# Update data to db



# Reading from database:

db = firebase.database()
x = db.get()
df = pd.DataFrame.from_dict(x.val())
community = df['Community']
del df['Community']
df['Community'] = community
print(df.columns)

