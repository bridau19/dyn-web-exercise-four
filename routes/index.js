const express = required("express");
// middleware to allow for routing on the node server
const router = express.Router();
// require firebase
const firebase = require("firebase/firestore");
// initialize Firebase Database
const db = firebase.firestore();
// reference to the blogposts collection
const blogposts = db.collection("blogposts");

// get all articles from firebase
router.get('/', (req, res) => {
    // create empty array
    const blogpostsArray = [];

    // TODO: get blogposts JSON from firebase

    //push docyment from blogposts into the bloposts array
    res.send( blogpostsArray);
});

module.exports = router;