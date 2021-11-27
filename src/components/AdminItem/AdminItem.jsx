import  React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function AdminItem({key, id, feeling, understanding, support, comments, flagged, date}) {

    const flagReview = (id) => {
        console.log('what is the id?',id)
    }
 return(
     <>
        <tr key={key}>
            <td>{id}</td>
            <td>{feeling}</td>
            <td>{understanding}</td>
            <td>{support}</td>
            <td>{comments}</td>
            <td>{flagged}</td>
            <td>{date}</td>
            <button onClick={() => flagReview(id)}>Flag</button>
        </tr>
     </>
 )

}


export default AdminItem;