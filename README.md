# Image Generator App

This project is a full-stack application that generates images based on user input, using OpenAI's hypothetical image generation API. The backend is implemented using Python and Flask, and the frontend is built using React.

## Project Structure

sh```
.
├── client          # React Frontend
│   ├── src         # Source Files
│   ├── ...
├── venv            # Python Virtual Environment
├── app.py          # Flask App
```

## Setup and Run

### Backend

#### 1. Setup Virtual Environment and Install Dependencies

sh```
mkdir image-generator
cd image-generator
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
pip install Flask openai requests flask-cors
```

#### 2. Run the Backend

sh```
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
python app.py
```

### Frontend

#### 3. Setup and Install Dependencies

sh```
cd client
npm install
```

#### 4. Run the Frontend

sh```
npm start
```

## Usage

Navigate to `http://localhost:3000` in your web browser and enter the image prompt. Click on `Generate` to create and display the image.

## Security Considerations

For production deployment, please consider the following:
- Use environment variables or secure vaults to handle API keys and other sensitive information.
- Specify allowed origins, methods, and headers explicitly in CORS configurations to minimize security risks.
- Use a WSGI server for Flask and a web server to serve your React app.

## License

This project is [MIT](LICENSE) licensed.
