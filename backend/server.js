const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// A basic function to estimate time complexity from code
const estimateTimeComplexity = (code) => {
  let timeComplexity = 'O(1)'; // Default assumption

  // Basic heuristics for detecting common code patterns
  if (code.includes('for') || code.includes('while')) {
    const loopCount = (code.match(/for/g) || []).length + (code.match(/while/g) || []).length;
    if (loopCount === 1) {
      timeComplexity = 'O(n)';
    } else if (loopCount === 2) {
      timeComplexity = 'O(n^2)';
    } else if (loopCount > 2) {
      timeComplexity = 'O(n^3)';
    }
  }

  if (code.includes('function') && (code.match(/function/g) || []).length > 1) {
    timeComplexity = 'O(2^n)';
  }

  return timeComplexity;
};

// API endpoint to analyze the code and estimate time complexity
app.post('/api/analyze', (req, res) => {
  const { code } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid code input' });
  }

  const timeComplexity = estimateTimeComplexity(code);
  return res.json({ timeComplexity });
});

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
