from flask import Flask, request, jsonify
import os
from model import predict_product
from footprint import load_footprint_data, get_footprint_data

app = Flask(__name__)

# Load the CSV data
csv_file_path = 'water_footprint.csv'
footprint_data = load_footprint_data(csv_file_path)

@app.route('/')
def home():
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Water Footprint Estimator</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                background-color: #f8f9fa;
            }
            .container {
                max-width: 600px;
                margin-top: 50px;
                background-color: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #007bff;
            }
            .btn-primary {
                background-color: #007bff;
                border: none;
            }
            .btn-primary:hover {
                background-color: #0056b3;
            }
            .result {
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Water Footprint Estimator</h1>
            <form method="POST" enctype="multipart/form-data" action="/upload">
                <div class="form-group">
                    <label for="file">Select Product Image:</label>
                    <input type="file" name="file" class="form-control-file" accept="image/*" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Upload and Estimate</button>
            </form>
            <div class="result text-center mt-4">
                <div id="resultText"></div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script>
            $('form').on('submit', function(e) {
                e.preventDefault();
                var formData = new FormData(this);

                $.ajax({
                    type: 'POST',
                    url: '/upload',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function(response) {
                        if (response.error) {
                            $('#resultText').html('<p style="color: red;">' + response.error + '</p>');
                        } else {
                            var resultHtml = '<h4>Product Information:</h4>';
                            resultHtml += '<ul>';
                            for (var key in response) {
                                if (response.hasOwnProperty(key)) {
                                    resultHtml += '<li><strong>' + key + ':</strong> ' + response[key] + '</li>';
                                }
                            }
                            resultHtml += '</ul>';
                            $('#resultText').html(resultHtml);
                        }
                    },
                    error: function() {
                        $('#resultText').html('<p style="color: red;">An error occurred during the upload.</p>');
                    }
                });
            });
        </script>
    </body>
    </html>
    '''

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    # Save the uploaded image to a temporary location
    image_path = os.path.join('uploads', file.filename)
    file.save(image_path)

    # Predict product (crop) using the image recognition model
    product_name = predict_product(image_path)

    # Retrieve water footprint data from the CSV
    if footprint_data is not None:
        product_info = get_footprint_data(product_name, footprint_data)
        if product_info:
            return jsonify(product_info)
        else:
            return jsonify({"error": "Product not found in the database"}), 404
    else:
        return jsonify({"error": "Failed to load footprint data"}), 500

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')

    app.run(host='0.0.0.0', port=5000)
