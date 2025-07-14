import React, { useState, FormEvent } from 'react';

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [validity, setValidity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!longUrl) {
      setError('Please enter a URL to shorten.');
      return;
    }

    // Here you would typically handle the API call to shorten the URL
    console.log('Submitting:', { longUrl, shortCode, validity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="longUrl">Long URL:</label>
        <input
          type="url"
          id="longUrl"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="shortCode">Custom Shortcode (optional):</label>
        <input
          type="text"
          id="shortCode"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="validity">Validity Period (optional, in days):</label>
        <input
          type="number"
          id="validity"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Shorten URL</button>
    </form>
  );
};

export default ShortenForm;