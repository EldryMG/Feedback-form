import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [commentsValue, setCommentsValue] = useState('');

    const addComments = (event) => {
        event.preventDefault();
        const action = {
                type: 'SET_COMMENTS',
                result: commentsValue,
            };
            dispatch(action);
            history.push('/Review');
    };

    return (
        <>
            <h2>Any comments you'd like to add for today?</h2>
            <form onSubmit={(event) => addComments(event)}>
                <input value={commentsValue}
                    type="text"
                    placeholder='Leave a comment'
                    onChange={(event) => setCommentsValue(event.target.value)} />

                <button type='submit' value='Submit'>Submit</button>
            </form>
        </>
    );
}

export default Comments;