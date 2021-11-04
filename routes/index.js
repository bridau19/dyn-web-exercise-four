const express = require("express");
// middleware to allow for routing on the node server
const router = express.Router();
// require firebase
const firebase = require("firebase/firestore");
// initialize Firebase Database
const db = firebase.getFirestore();
// get all articles from firebase
router.get("/", (req, res) => {
    const blogposts = firestore.getDocs(
        firestore.collection(db, "blogposts")
    );
    // create empty array
    const blogpostsArray = [];

    blogposts
        .then((response) => {
            response.forEach((doc) => {
                // Push document into arrat every time the query loops over
                blogpostsArray.push(doc.data());
            });
            return res.send( blogpostsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
    });

module.exports = router;
