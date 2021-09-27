import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
<TextField id="filled-basic" label="Filled" variant="filled" />

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
                <TextField value={commentsValue}
                    type="text"
                    placeholder='Leave a comment'
                    onChange={(event) => setCommentsValue(event.target.value)} />

                <Button style = {{ backgroundColor: '#4982dd' }}  
                                variant="contained" 
                                size="small" 
                                type='submit' 
                                value='Submit'>Submit</Button>
            </form>
        </>
    );
}

export default Comments;