import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {Button, Paper} from '@material-ui/core';

function Review(){

    const reviewValues = useSelector(store => store.actualReducer);

    const history = useHistory();

    const submitAndHistory = () => {
        axios({
            method: 'POST',
            url:'/feedback',
            data: {
                feeling: reviewValues.feeling,
                understanding: reviewValues.understanding,
                support: reviewValues.support,
                comments: reviewValues.comment,
                flagged: false,
            }
        }).then( response => {
            console.log('POST successfull')
            
        }).catch(error => {
            history.push('/final')
            console.log('There is an error in POST', error);
        })
    }

    return(
        <>
        <h1>Review</h1>
        <p>{JSON.stringify(reviewValues)}</p>       
        <h3>Feeling: {reviewValues.feeling}</h3>
        <h3>Understanding: {reviewValues.understanding}</h3>
        <h3>Support: {reviewValues.support}</h3>
        <h3>Comments: {reviewValues.comment}</h3>
        <Button variant="contained" size="small" onClick={submitAndHistory}>Submit</Button>
        </>

    );
}

export default Review;