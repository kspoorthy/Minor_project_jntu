import React, { useState } from 'react';
import './upload.css';
import axios from 'axios';

const Upload = () => {
  const [fileName, setFileName] = useState('');
  const [codeText, setCodeText] = useState('');
  const [review, setReview] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || '');
  };

  const handleCodeChange = (e) => {
    setCodeText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileName) {
      alert('File submitted: ' + fileName);
    }
    if (codeText.trim()) {
      alert('Code submitted:\n' + codeText);
    }
    if (!fileName && !codeText.trim()) {
      alert('Please upload a file or enter some code.');
    }
  };

  const handleTimeComplexity = async () => {
    if (!codeText.trim()) {
      setReview("Please enter some code to analyze.");
      return;
    }

    setReview("Analyzing time complexity...");

    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        code: codeText,
      });

      if (response.data?.timeComplexity) {
        setReview(`Time Complexity: ${response.data.timeComplexity}`);
      } else {
        setReview("Unable to determine time complexity.");
      }
    } catch (error) {
      console.error("Error analyzing time complexity:", error);
      setReview("An error occurred while analyzing.");
    }
  };

  const handleSpaceComplexity = () => {
    // Placeholder logic for space complexity
    setReview("Space complexity analysis not implemented yet.");
  };

  const reviewCode = () => {
    // Placeholder logic for code review
    setReview("Code review feature not implemented yet.");
  };

  return (
    <section id="upload" className="upload-section">
      <h2>Upload or Write Your Code</h2>
      <p>Submit your script or code for review by our AI tool.</p>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        {fileName && <p className="file-name">Selected: {fileName}</p>}

        <label htmlFor="code-area">Or write code below:</label>
        <textarea
          id="code-area"
          value={codeText}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
          rows={10}
          style={{ width: '100%', marginTop: '10px' }}
        />

        <div style={{ marginTop: '10px' }}>
          <button type="button" onClick={handleTimeComplexity}>
            Time Complexity
          </button>
          <button type="button" onClick={handleSpaceComplexity} style={{ marginLeft: '10px' }}>
            Space Complexity
          </button>
          <button type="button" onClick={reviewCode} style={{ marginLeft: '10px' }}>
            Review
          </button>
        </div>

        {review && (
          <div className="review-box" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <strong>Analysis Result:</strong>
            <p>{review}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default Upload;
