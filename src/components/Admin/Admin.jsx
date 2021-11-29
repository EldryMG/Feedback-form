import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import AdminItem from '../AdminItem/AdminItem';
import "./Admin.css"
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
} from "@mui/material";


function Admin() {

    const [adminData, setAdminData] = useState([]);

    //get Client-side
    const getServerInfo = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            setAdminData(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log('There was an error getting data back', error)
        })
    }


    useEffect(() => {
        getServerInfo();
    }, [])

    return (
        <>
            <h3>Recent Submissions</h3>
            {/* <p>{JSON.stringify(adminData[0].flagged)}</p> */}
            {/* <Paper elevation={4} className="adminPaper"> */}
            <div className="table-container">
                <TableContainer component={Paper} elevation={4} sx={{ margin: 11, padding: 7, maxWidth: 850, textAlign: "center"}} >
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell align="center">Comments</TableCell>
                                <TableCell>Flagged</TableCell>
                                <TableCell>Timestamp</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminData.map(student => {
                                return (<AdminItem key={student.id}
                                    id={student.id}
                                    feeling={student.feeling}
                                    understanding={student.understanding}
                                    support={student.support}
                                    comments={student.comments}
                                    flagged={student.flagged}
                                    date={student.date} />);
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {/* </Paper> */}

        </>

    );


}

export default Admin;