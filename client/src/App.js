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
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Image Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt"
      />
      <button onClick={generateImage}>Generate</button>
      {error && <div>Error: {error}</div>}
      {imageSrc && <img src={imageSrc} alt="Generated" />}
    </div>
  );
}

export default App;
