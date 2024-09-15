#model.py
import tensorflow as tf
import numpy as np
import cv2

# Load pre-trained MobileNetV2 model
model = tf.keras.applications.MobileNetV2(weights='imagenet')

# Preprocess the input image for the model
def preprocess_image(image_path):
    image = cv2.imread(image_path)
    image = cv2.resize(image, (224, 224))  # MobileNetV2 expects 224x224 images
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return tf.keras.applications.mobilenet_v2.preprocess_input(image)

# Predict the product category
def predict_product(image_path):
    processed_image = preprocess_image(image_path)
    predictions = model.predict(processed_image)
    decoded_predictions = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=1)
    product = decoded_predictions[0][0][1]  # Extract product name
    return product
