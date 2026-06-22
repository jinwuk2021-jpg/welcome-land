const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Void Breach.dc.html'));
});

// Fallback to main HTML for any routes (for client-side routing if needed)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Void Breach.dc.html'));
});

app.listen(PORT, () => {
  console.log(`Void Breach server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
