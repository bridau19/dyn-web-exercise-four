const express = required("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello World in routes`);
});

module.exports = router;