import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [supportValue, setSupportValue] = useState('');

    const addSupport = (event) => {
        event.preventDefault()
        if (supportValue > 5 || supportValue < 1) {
            alert('Please pick a number between 1 and 5');
        } else {
            const action = {
                type: 'SET_SUPPORT',
                result: supportValue,
            };
            dispatch(action);
            history.push('/comments');
        }
    };

    return (
        <>
            <h2>How well are you being supported?</h2>
            <form onSubmit={(event) => addSupport(event)}>
                <input value={supportValue}
                    type="number"
                    placeholder='number from 1-5'
                    onChange={(event) => setSupportValue(event.target.value)} />

                <button type='submit' value='Submit'>Submit</button>
            </form>
        </>
    );
}

export default Support;