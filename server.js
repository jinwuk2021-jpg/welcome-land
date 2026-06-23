const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Serve static files from assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/_check', express.static(path.join(__dirname, '_check')));

// Serve root-level JS files (novel-ch1.js … novel-ch6.js, support.js, etc.)
app.get(/^\/[\w-]+\.js$/, (req, res) => {
  const filePath = path.join(__dirname, path.basename(req.path));
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not Found');
  }
});

// Route for the main HTML file
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'Void Breach.dc.html');
  if (fs.existsSync(htmlPath)) {
    res.sendFile(htmlPath);
  } else {
    res.status(404).send('HTML file not found');
  }
});

// Fallback - serve main HTML for any routes
app.get('*', (req, res) => {
  const htmlPath = path.join(__dirname, 'Void Breach.dc.html');
  if (fs.existsSync(htmlPath)) {
    res.sendFile(htmlPath);
  } else {
    res.status(404).send('Not Found');
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Void Breach server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
  console.log(`Public URL: https://welcome-land.onrender.com`);
});
