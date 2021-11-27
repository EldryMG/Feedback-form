import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'; //for setting feelingsValue
import { useDispatch } from 'react-redux'; //only useDispatch is used.
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import './Feeling.css'




function Feeling() {
    //dispatch to Redux
    const dispatch = useDispatch();

    //Set history to change pages.
    const history = useHistory();

    //Set a variable to push value into.
    const [feelingsValue, setFeelingsValue] = useState('');

    const addValue = (event) => {
        event.preventDefault()
        if (feelingsValue > 5 || feelingsValue < 1) {
            alert('Please pick a number between 1 and 5');
        } else {
            const action = {
                type: 'SET_FEELING',
                result: feelingsValue,
            }
            dispatch(action);
            history.push('/understanding');
        }
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            {/* Click submit, call addValue which will send data to Redux */}
            <form onSubmit={(event) => addValue(event)}>
                <TextField value={feelingsValue}
                    label="number from 1-5"
                    type="text"
                    onChange={(event) => setFeelingsValue(event.target.value)} />

                <button className="feeling-submit-button" type='submit' value='Submit'>Submit</button>
            </form>
        </>
    );
}

export default Feeling;

