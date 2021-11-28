import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Paper } from '@material-ui/core';
import { MdSave } from "react-icons/md";
import './Review.css'

function Review() {

    const reviewValues = useSelector(store => store.actualReducer);

    const history = useHistory();

    const submitAndHistory = () => {
        // console.log('CLIENT SIDE REVIEWVALUES', reviewValues)
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: reviewValues.feeling,
                understanding: reviewValues.understanding,
                support: reviewValues.support,
                comments: reviewValues.comments,
            }
        }).then(response => {
            // console.log('POST successfull', reviewValues)
            history.push('/final')
        }).catch(error => {
            console.log('There is an error in POST', error);
        })
    }

    const toAdmin = () => {
        history.push('/admin');
      };
    

    return (
        <>
            <h1>Review</h1>
            {/* <p>{JSON.stringify(reviewValues)}</p> */}
            <h3>Feeling: {reviewValues.feeling}</h3>
            <h3>Understanding: {reviewValues.understanding}</h3>
            <h3>Support: {reviewValues.support}</h3>
            <h3>Comments: {reviewValues.comments}</h3>
            <Button variant="contained" size="large" onClick={submitAndHistory}><MdSave size="1.5em" /></Button>

            <div className='admin-button'>
                <Button variant="contained" size="small" onClick={toAdmin}>Admin Only!</Button>
            </div>
        </>

    );
}

export default Review;