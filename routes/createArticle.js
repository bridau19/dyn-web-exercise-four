const express = require("express");

const router = express.Router();

// Create form for submitting...
const form = `
    <h1>Create Article</h1>
            
            <form action="/create/submit">
                <div style="
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 20px;
                    max-width: 325px;
                ">
                    <label for="articleTitle"> 
                        Article Title 
                    </label>
                    <input 
                        type="text" 
                        name="articleTitle" 
                        placeholder="Type article title..."
                    />

                    <label for="articleText"> 
                        Article Text 
                    </label>
                    <input 
                        type="text" 
                        name="articleText" 
                        placeholder="Type article text..."
                    />

                    <label for="articleText"> 
                        Author 
                    </label>
                    <input 
                        type="text" 
                        name="author" 
                        placeholder="Author name..."
                    />
                </div>
                <button type="submit"> submit Article </button>
            </form>`;

// Require Firestore
const firestore = require('firebase/firestore');
// Reference DB
const db = firestore.getFirestore();

// Serves web form for users
router.get('/', (req, res) => {
    res.send(form);
});

// API Endpoint for submitting data through our form
router.get("/submit", (req, res) => {
    const queryParams = req.query; // Query params from URL
    const title = queryParams.articleTitle || '';
    const text = queryParams.articleText || '';
    const author = queryParams.author || '';
    
    // Create ID from title
    const idFromTitle = title.replace(/\s+/g, '-').toLowerCase();

    // Submit post to Firebase
    const setBlogPost = firestore.setDoc( 
        firestore.doc(db, "blogposts", idFromTitle), 
        {
            title,
            text,
            author
        });

    setBlogPost
    .then((response) => {
        // If successful send correct message
        res.send(`
            <h1>Submission Successful!</h1>
            <p><a href="/create">Add Another Post</a></p>
        `);
    })
    .catch((error) => {
        // If failure send correct message
        res.send(`Error Submitting: ${error.toString()}`);
    });
});

module.exports = router;