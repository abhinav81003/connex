import pandas as pd
import numpy as np

df = pd.read_csv("Test_Dataset.csv")
df = df.to_numpy()
max_val = df.shape[1] - 1
n_communities = df[:, max_val].max()

avg = np.zeros((max_val, int(df[:, max_val].max()+1)))          # total age for each community
communities = np.zeros((1, int(df[:, max_val].max()+1)))  # number of people in each community

# calculates number of people in each community
for i in range(len(df)):
    communities[0, int(df[i, max_val])] += 1

for i in range(max_val):
    for j in range(len(df)):
        avg[i, int(df[j, max_val])] += df[j, i]

# calculates average value
for i in range(len(avg)):

    for j in range(int(n_communities)+1):
        avg[i, j] /= communities[0, j]















