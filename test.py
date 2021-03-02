from sklearn import preprocessing, neighbors
import numpy as np


def dosklearn():
    training_set = {'Dog': [[1, 2], [2, 3], [3, 1]],
                    'Cat': [[11, 20], [14, 15], [12, 15]]}
    testing_set = [15, 20]

    x = []
    y = []
    for group in training_set:
        for features in training_set[group]:
            x.append(features)
            y.append(group)

    clf = neighbors.KNeighborsClassifier()
    clf.fit(x, y)

    testing_set = np.array(testing_set)
    testing_set = testing_set.reshape(1, -1)

    prediction = clf.predict(testing_set)
    return str(prediction[0])


if __name__ == '__main__':
    print(dosklearn())
