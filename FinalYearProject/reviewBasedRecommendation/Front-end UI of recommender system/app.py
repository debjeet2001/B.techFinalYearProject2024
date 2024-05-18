from flask import Flask, render_template, request
import pandas as pd
import pickle

app = Flask(__name__)

# Load the model
with open('xgboost_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/recommend', methods=['POST'])
def recommend():
    airline = request.form['airline']
    route = request.form['route']
    flight_class = request.form['class']
    
    # Create a DataFrame for the input
    input_data = pd.DataFrame({
        'Airline': [airline],
        'Route': [route],
        'Class': [flight_class]
    })
    
    # Encode the input
    input_encoded = pd.get_dummies(input_data)
    
    # Align the input with the training data columns
    model_columns = model.get_booster().feature_names
    input_encoded = input_encoded.reindex(columns=model_columns, fill_value=0)
    
    # Predict
    prediction = model.predict(input_encoded)
    recommendation = 'Recommended' if prediction[0] == 1 else 'Not Recommended'
    
    return render_template('result.html', recommendation=recommendation)

if __name__ == '__main__':
    app.run(debug=True)
