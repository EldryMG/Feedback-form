const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();

// POST to DB
router.post('/', (req, res) => {
    console.log('in feedback POST with', req.body);
    const feedbackToAdd = req.body;
    console.log('this is feedbackToAdd', feedbackToAdd);
    const sqlText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedbackToAdd.feeling,
                        feedbackToAdd.understanding,
                        feedbackToAdd.support,
                        feedbackToAdd.comment])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
        console.log(`error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
});

module.exports = router;