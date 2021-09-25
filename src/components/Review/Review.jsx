import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Review(){

    const reviewValues = useSelector(store => store.actualReducer);

    return(
        <>
        <p>Some Review</p>       
        <p>{JSON.stringify(reviewValues)}</p>
        <h3>Feeling: {reviewValues.feeling}</h3>
        <h3>Understanding: {reviewValues.understanding}</h3>
        <h3>Support: {reviewValues.support}</h3>
        <h3>Comments: {reviewValues.comment}</h3>
        </>

    );
}

output = {"feeling":"4",
        "understanding":"3",
        "support":"2",
        "comment":"leaving a comment"}
        
export default Review;