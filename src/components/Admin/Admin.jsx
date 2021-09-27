import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import AdminItem from '../AdminItem/AdminItem';



function Admin(){
    const [adminData, setAdminData] = useState([]);

    const getServerInfo = () =>{
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
        console.log('in useEffect')
        getServerInfo();
    }, [])

    return (
        <>
            <h3>Recent Submissions</h3>
             <p>{JSON.stringify(adminData)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flagged</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                {adminData.map(student =>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.feeling}</td>
                        <td>{student.understanding}</td>
                        <td>{student.support}</td>
                        <td>{student.comments}</td>
                        <td><AdminItem
                            id={student.id}
                            flagged={student.flagged}/></td>
                        <td>{student.date}</td>
                    </tr>
                    
                ))}</tbody>
            </table>

        </>

    );


}

export default Admin;