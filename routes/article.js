const express = require("express");

const router = express.Router();

// TODO: hook up to firebase for a single post on ID
// get all articles from firebase
router.get('/', (req, res) => {
    res.send(`
        <h1>Individual Post</h1>`);
});

module.exports = router;