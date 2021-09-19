import pandas as pd
import numpy as np
import json
import pyrebase
from sklearn.cluster import KMeans
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

df = pd.read_csv("Test_Dataset.csv")

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

scores = []
for i in range(2, 10):

    km = KMeans(n_clusters=i)
    pred = km.fit_predict(df[['Age', 'Basketball', 'American Football', 'Baseball', 'Soccer', 'Cricket', 'Tennis',
                              'Horror', 'Comedy', 'Action', 'SciFi', 'Romance', 'Drama', 'Tech', 'News',
                              'Politics', 'Fashion']])

    label = km.labels_
    scores.append(silhouette_score(df, label))


max_val = max(scores)
optimal_clusters = scores.index(max_val) + 2


km = KMeans(n_clusters=optimal_clusters)
pred = km.fit_predict(df[['Age', 'Basketball', 'American Football', 'Baseball', 'Soccer', 'Cricket', 'Tennis',
                          'Horror', 'Comedy', 'Action', 'SciFi', 'Romance', 'Drama', 'Tech', 'News',
                          'Politics', 'Fashion']])



# Predict Clusters
age = 35
age = scaler.fit_transform([[age]])  # scale age using same transformation
clusters = km.predict([[age, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4]])


# Find suggestive communities
suggestions = []
groups = []
for i in range(len(pred)):
    if pred[i] in clusters:
        suggestions.append(i)

print(suggestions)
