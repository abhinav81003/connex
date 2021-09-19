import pandas as pd
import numpy as np
import json
import pyrebase
from sklearn.cluster import KMeans
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import silhouette_score

# arguements from frontend
main_groups = ['Rowing', 'Cosmology', 'Italian Desserts', 'Best Hiking Spots', 'Best Saloon Cars', 'Mens Fashion', 'Dog Care', 'NBA Chat',
               'NHL Chat', 'NFL Chat']


def Predict(age=0.0, basketball=0.0, american_football=0.0, soccer=0.0, cricket=0.0, tennis=0.0,
            horror=0.0, comedy=0.0, action=0.0, scifi=0.0, romance=0.0, drama=0.0, tech=0.0,
            news=0.0, politics=0.0, fashion=0.0):

    firebaseConfig = {'apiKey': "AIzaSyDkRY30sGKFcGTRS_lJIOtJSt75hylz3B4",
                      'authDomain': "connex-64bbe.firebaseapp.com",
                      'databaseURL': "https://connex-64bbe-default-rtdb.firebaseio.com",
                      'projectId': "connex-64bbe",
                      'storageBucket': "connex-64bbe.appspot.com",
                      'messagingSenderId': "828129360946",
                      'appId': "1:828129360946:web:70d510868b1091147f502b",
                      'measurementId': "G-58RE9EMKYJ"}

    firebase = pyrebase.initialize_app(firebaseConfig)
    db = firebase.database()
    x = db.get()
    df = pd.DataFrame.from_dict(x.val())
    community = df['Community']
    del df['Community']
    df['Community'] = community

    #   *** Calculate averages ***

    df = df.to_numpy()
    max_val = df.shape[1] - 1
    n_communities = df[:, max_val].max()
    avg = np.zeros((max_val, int(df[:, max_val].max() + 1)))  # total age for each community
    communities = np.zeros((1, int(df[:, max_val].max() + 1)))  # number of people in each community

    # calculates number of people in each community
    for i in range(len(df)):
        communities[0, int(df[i, max_val])] += 1

    for i in range(max_val):
        for j in range(len(df)):
            avg[i, int(df[j, max_val])] += df[j, i]

    # calculates average value
    for i in range(len(avg)):

        for j in range(int(n_communities) + 1):
            avg[i, j] /= communities[0, j]

    avg = avg.transpose()

    df = pd.DataFrame(avg, columns=['Action', 'Age', 'American Football', 'Baseball', 'Basketball', 'Comedy',
                                    'Cricket', 'Drama', 'Fashion', 'Horror', 'News', 'Politics', 'Romance', 'SciFi',
                                    'Soccer', 'Tech', 'Tennis'])

    scaler = MinMaxScaler()
    scaler.fit(df[['Age']])
    df['Age'] = scaler.fit_transform(np.array(df['Age']).reshape(-1, 1))

    km = KMeans(n_clusters=3)

    pred = km.fit_predict(df[['Age', 'Basketball', 'American Football', 'Soccer', 'Cricket', 'Tennis',
                              'Horror', 'Comedy', 'Action', 'SciFi', 'Romance', 'Drama', 'Tech', 'News',
                              'Politics', 'Fashion']])

    # Predict Clusters

    age = scaler.fit_transform([[age]])  # scale age using same transformation
    clusters = km.predict([[age, basketball, american_football, soccer, cricket, tennis, horror, comedy,
                            action, scifi, romance, drama, tech, news, politics, fashion]])

    # Find suggestive communities
    suggestions = []
    groups = []
    for i in range(len(pred)):
        if pred[i] in clusters:
            suggestions.append(i)

    for i in range(len(suggestions)):
        groups.append(main_groups[i])

    groups = json.dumps(groups)         # convert to json string

    return groups


# Test Case
x = Predict(35, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3)
print(x)
