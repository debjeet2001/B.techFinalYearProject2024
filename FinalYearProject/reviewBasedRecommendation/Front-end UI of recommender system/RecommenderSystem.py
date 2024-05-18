import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score, confusion_matrix
from xgboost import XGBClassifier
import nltk
from nltk.corpus import stopwords
import pickle

nltk.download('stopwords')

# Load the dataset
data = pd.read_csv('reviews.csv')


# Convert text to lowercase
data["Airline"] = data["Airline"].str.lower()
data['Reviews'] = data['Reviews'].str.lower()
data['Route'] = data['Route'].str.lower()
data['Class'] = data['Class'].str.lower()

# Remove punctuation and special characters
data['Airline'] = data['Airline'].str.replace('[^\w\s]', '')
data['Reviews'] = data['Reviews'].str.replace('[^\w\s]', '')
data['Route'] = data['Route'].str.replace('[^\w\s]', '')
data['Class'] = data['Class'].str.replace('[^\w\s]', '')

# Tokenize text (split text into words)
data['Airline'] = data['Airline'].apply(lambda x: x.split())
data['Reviews'] = data['Reviews'].apply(lambda x: x.split())
data['Route'] = data['Route'].apply(lambda x: x.split())
data['Class'] = data['Class'].apply(lambda x: x.split())

# Remove stopwords (common words that do not carry much meaning)
stop_words = set(stopwords.words('english'))
data['Airline'] = data['Airline'].apply(lambda x: [word for word in x if word not in stop_words])
data['Reviews'] = data['Reviews'].apply(lambda x: [word for word in x if word not in stop_words])
data['Route'] = data['Route'].apply(lambda x: [word for word in x if word not in stop_words])
data['Class'] = data['Class'].apply(lambda x: [word for word in x if word not in stop_words])

# Convert tokens back to string
data['Airline'] = data['Airline'].apply(lambda x: ' '.join(x))
data['Reviews'] = data['Reviews'].apply(lambda x: ' '.join(x))
data['Route'] = data['Route'].apply(lambda x: ' '.join(x))
data['Class'] = data['Class'].apply(lambda x: ' '.join(x))

# Define additional features in the specified order
additional_features = ['Seat Comfort', 'Staff Service', 'Food & Beverages', 
                       'Inflight Entertainment', 'Value For Money', 'Overall Rating']

# Extract additional features from the dataset
X_additional_features = data[additional_features]

# Initialize TF-IDF Vectorizer
tfidf_vectorizer = TfidfVectorizer(max_features=1000)

# Fit and transform the text data
X_Airline = tfidf_vectorizer.fit_transform(data['Airline'])
X_Reviews = tfidf_vectorizer.fit_transform(data['Reviews'])
X_Route = tfidf_vectorizer.fit_transform(data['Route'])
X_Class = tfidf_vectorizer.fit_transform(data['Class'])


# Combine TF-IDF features with additional features
from scipy.sparse import hstack
X_combined = hstack((X_Airline,X_Reviews,X_Route,X_Class,X_additional_features.values))

# Target variable
y = data['Recommended']

# Split Data into Train and Test Sets
X_train, X_test, y_train, y_test = train_test_split(X_combined, y, test_size=0.2, random_state=42)

# Convert string labels to binary labels
y_train_binary = y_train.map({'no': 0, 'yes': 1})
y_test_binary = y_test.map({'no': 0, 'yes': 1})


# Initialize XGBoost classifier
xgb_classifier = XGBClassifier(random_state=42)

# Define the parameter grid
param_grid = {
    'learning_rate': [0.05, 0.1, 0.2],
    'max_depth': [3, 5, 7],
    'n_estimators': [50, 100, 200]
}

# Initialize GridSearchCV
grid_search = GridSearchCV(estimator=xgb_classifier, param_grid=param_grid, cv=3, scoring='accuracy')

# Perform grid search
grid_search.fit(X_train.toarray(), y_train_binary)

# Get the best parameters and best score
best_params = grid_search.best_params_
best_score = grid_search.best_score_

# Print the best parameters and best score
print("Best Parameters:", best_params)
print("Best Score:", best_score)

# Use the best parameters to train the XGBoost model
model = XGBClassifier(**best_params, random_state=42)
model.fit(X_train.toarray(), y_train_binary)

# Evaluate the model
y_pred_best_xgb = model.predict(X_test.toarray())
accuracy_best_xgb = accuracy_score(y_test_binary, y_pred_best_xgb)
conf_matrix_best_xgb = confusion_matrix(y_test_binary, y_pred_best_xgb)

# Print the accuracy and confusion matrix of the best XGBoost model
print("Best XGBoost Accuracy:", accuracy_best_xgb)
print("Best XGBoost Confusion Matrix:")
print(conf_matrix_best_xgb)

# Save the trained model
with open('xgboost_model.pkl', 'wb') as file:
    pickle.dump(model, file)

print("Model trained and saved as xgboost_model.pkl")

# Save the TF-IDF vectorizer
with open('tfidf_vectorizer.pkl', 'wb') as file:
    pickle.dump(tfidf_vectorizer, file)

