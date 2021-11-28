import React from 'react';
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

function AdminItem({ key, id, feeling, understanding, support, comments, flagged, date }) {



    const flagReview = (id) => {
        console.log('what is the id?', id)
        console.log('what is flagged?', flagged)
    }

    let flaggedOrNot = ''

    
    return (
        <>
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