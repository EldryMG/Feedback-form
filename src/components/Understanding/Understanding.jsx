import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
<TextField id="filled-basic" label="Filled" variant="filled" />


// This is a copy of the previous page. Line 25 says payload instead of result for testing purposes.

function Understanding() {
    //dispatch to Redux
    const dispatch = useDispatch();
    //Set history to change pages.
    const history = useHistory();
    //Set a variable to push value into.
    const [understandingValue, setUnderstandingValue] = useState('');


    const addUnderstanding = (event) => {
        event.preventDefault()
        if (understandingValue > 5 || understandingValue < 1) {
            alert('Please pick a number between 1 and 5');
        } else {
            const action = {
                type: 'SET_UNDERSTANDING',
                payload: understandingValue,
            };
            dispatch(action);
            history.push('/support');
        }
    };

    return (
        <>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={(event) => addUnderstanding(event)}>
                <TextField value={understandingValue}
                    type="number"
                    placeholder='number from 1-5'
                    onChange={(event) => setUnderstandingValue(event.target.value)} />

                <Button style = {{ backgroundColor: '#4982dd' }} 
                                variant="contained" 
                                size="small" 
                                type='submit' 
                                value='Submit'>Submit</Button>
            </form>
        </>
    );
}

export default Understanding;