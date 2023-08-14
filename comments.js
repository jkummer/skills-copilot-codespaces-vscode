// Create web server application
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const comments = require('./comments');

// Use middleware to parse request body
app.use(bodyParser.json());

// Add a new comment
app.post('/comments', (req, res) => {
    // Get comment object from request body
    const comment = req.body;
    // Add date for when comment was submitted
    comment.date = new Date();
    // Add comment to list of comments
    comments.push(comment);
    // Return updated list of comments
    res.json(comments);
});

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start web server on port 3000
app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});