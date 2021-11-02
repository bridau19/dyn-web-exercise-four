const express = required("express");

const router = express.Router();

// TODO: hook up to firebase to allow for a POST request tp create a single post
// get all articles from firebase
router.get('/', (req, res) => {
    res.send(`
        <h1>Create Post</h1>
        
        <form>
            <div style="
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                max-width: 325px;
            ">
                <label for="articleTitle"> Article Title </label>
                <input type="text" name="articleTitle" placeholder="Type article title..."/>
            </div>
            <button type="submit"> submit Article </button>
        </form>
        `);
});

module.exports = router;