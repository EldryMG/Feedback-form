import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'; //for setting feelingsValue
import { useDispatch } from 'react-redux';


function Feeling() {
    //dispatch to Redux
    const dispatch = useDispatch();
    //Set history to change pages.
    const history = useHistory();
    //Set a variable to push value into.
    const [feelingsValue, setFeelingsValue] = useState();

    //Function to change page.
    const nextPage = () => {
        history.push('/understanding')
    };

    const addValue = (event) => {
        event.preventDefault()
        console.log('in addValue');
        const action = {
            type: 'SET_FEELING',
            payload: feelingsValue,
        };
        dispatch(action);
    }

    return (
        <>
            <h2>How are you feeling today?</h2>
            <form onSubmit={(event) => addValue(event)}>
                <input value={feelingsValue}
                        type="number"
                        placeholder='number from 1-5'
                        onChange={(event) => setFeelingsValue(event.target.value)} />

                <button type='submit' value='Submit'>Submit</button>
                <button onClick={nextPage}>Next</button>
            </form>
        </>
    );
}

export default Feeling;