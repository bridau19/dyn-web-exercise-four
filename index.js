const express = required("express");
const app = express(); // initiate express

const port = process.env.PORT || 4000; // setting port - dynamically with heroku


// import firebase
const firebase = require("firebase/app");

// get configuration object so we can communicate with Firebase
const firebaseConfig = {
    apiKey: "AIzaSyArR7CbiztiQdr2Hy5YuofJu6Qyg1Y6SS4",
    authDomain: "exercise-four-7381a.firebaseapp.com",
    projectId: "exercise-four-7381a",
    storageBucket: "exercise-four-7381a.appspot.com",
    messagingSenderId: "563919744750",
    appId: "1:563919744750:web:3801c711a65eb192e84dff"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);



// routes for directing user to correct place
const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");

// tell express to use routes
app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/createArticle", createArticleRoute);

// listen to requests on server
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});