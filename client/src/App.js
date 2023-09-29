import React, { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [error, setError] = useState('');

  const generateImage = async () => {
    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        setImageSrc(data.image_url);
        setError('');
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container main-container">
      <h1 className='neon'>Image Generator</h1>
      <div className='input-container'>
        <div className='form'>
          <input
            type="text"
            className='form-control'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt"
          />
        </div>
        <button className="btn btn-success" onClick={generateImage}>Generate</button>
      </div>
      <div className="container">
        {error && <div className='alert alert-warning'>Error: {error}</div>}
      </div>
      <div className='container'>
        {imageSrc &&
          <div className='image-container'>
            <h4 className='neon'>Generated Image</h4>
            <img src={imageSrc} className="image" alt="Generated" />
          </div>

        }
      </div>
    </div>
  );
}

export default App;
