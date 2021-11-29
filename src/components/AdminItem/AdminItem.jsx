import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import moment from 'moment';
import {
    Typography,
    Paper,
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
} from "@mui/material";

function AdminItem({ key, id, feeling, understanding, support, comments, flagged, date, adminData }) {

        const [toggleFlagged, setToggleFlagged] = useState(true)

    // console.log('what is whatFlagged', whatFlagged);

        //put Client-side
        const flagReview = (id) => {
            setToggleFlagged(!toggleFlagged)
            console.log('in markFlagged', id)
            axios({
                method: 'PUT',
                url: `/feedback/` + id,
                data: {
                    id: id,
                    bool: toggleFlagged
                }
            }).then(response => {
                console.log('response.data is', id)
                getServerInfo();
            }).catch(error => {
                console.log('OOPS,', error)
            })
        }

    return (
        <>
            <p>{JSON.stringify(adminData)}</p>
            <TableRow key={key}>
                <TableCell>{id}</TableCell>
                <TableCell>{feeling}</TableCell>
                <TableCell>{understanding}</TableCell>
                <TableCell>{support}</TableCell>
                <TableCell>{comments}</TableCell>
                <TableCell>{flagged.toString().toUpperCase()}</TableCell>
                <TableCell>{(moment(date).format('MMM Do YY'))}</TableCell>
                <button onClick={() => flagReview(id)}>Flag</button>
            </TableRow>
        </>
    )

}


export default AdminItem;