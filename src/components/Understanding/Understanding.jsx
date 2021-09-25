import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'; //for setting feelingsValue
import { useDispatch } from 'react-redux';

// This is a copy of the previous page. Line 23 says payload instead of result for testing purposes.

function Understanding() {
    //dispatch to Redux
    const dispatch = useDispatch();
    //Set history to change pages.
    const history = useHistory();
    //Set a variable to push value into.
    const [understandingValue, setUnderstandingValue] = useState('');


    const addUnderstanding = (event) => {
        event.preventDefault()
        console.log('in addUnderstanding');
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: understandingValue,
        };
        dispatch(action);
        history.push('/support');
    }

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={(event) => addUnderstanding(event)}>
                <input value={understandingValue}
                    type="number"
                    placeholder='number from 1-5'
                    onChange={(event) => setUnderstandingValue(event.target.value)} />

                <button type='submit' value='Submit'>Submit</button>
            </form>
        </>
    );
}

export default Understanding;