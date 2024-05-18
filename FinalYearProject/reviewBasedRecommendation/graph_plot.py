import matplotlib.pyplot as plt

# Data for Naive Bayes
naive_bayes_data = {
    'Sensitivity': 0.8770,
    'Specificity': 0.8393,
    'Precision': 0.8055,
    'Negative Predictive Value': 0.8999,
    'False Positive Rate': 0.1607,
    'False Discovery Rate': 0.1945,
    'False Negative Rate': 0.1230,
    'Accuracy': 0.8556,
    'F1 Score': 0.8397
}

# Data for GBM
gbm_data = {
    'Sensitivity': 0.9413,
    'Specificity': 0.9532,
    'Precision': 0.9474,
    'Negative Predictive Value': 0.9476,
    'False Positive Rate': 0.0468,
    'False Discovery Rate': 0.0526,
    'False Negative Rate': 0.0587,
    'Accuracy': 0.9475,
    'F1 Score': 0.9443
}

# Data for XGBoost
xgboost_data = {
    'Sensitivity': 0.9474,
    'Specificity': 0.9523,
    'Precision': 0.9461,
    'Negative Predictive Value': 0.9534,
    'False Positive Rate': 0.0477,
    'False Discovery Rate': 0.0539,
    'False Negative Rate': 0.0526,
    'Accuracy': 0.9500,
    'F1 Score': 0.9467
}

# Plotting
parameters = list(naive_bayes_data.keys())

plt.figure(figsize=(10, 6))

for model_data, model_name in zip([naive_bayes_data, gbm_data, xgboost_data], ['Naive Bayes', 'GBM', 'XGBoost']):
    values = list(model_data.values())
    plt.plot(parameters, values, label=model_name)

plt.title('Comparison of Model Performance')
plt.xlabel('Parameters')
plt.ylabel('Values')
plt.legend()
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

