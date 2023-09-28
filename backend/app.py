from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS library
import openai
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Replace with your OpenAI API key
api_key = 'YOUR_API_KEY'
openai.api_key = api_key


@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.json
    prompt = data.get('prompt', 'a white siamese cat')
    size = data.get('size', '1024x1024')
    n = data.get('n', 1)
    
    try:
        response = openai.Image.create(
            prompt=prompt,
            n=n,
            size=size
        )
        image_url = response['data'][0]['url']
        return jsonify({"image_url": image_url})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
