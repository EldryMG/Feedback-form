import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import AdminItem from '../AdminItem/AdminItem';



function Admin(){
    const [adminData, setAdminData] = useState([]);
//get Client-side
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
//put Client-side
    const markFlagged = (id) =>{
        console.log('in markFlagged', id)
        axios({
            method: 'PUT',
            url:`/feedback/` + id,
        }).then(response => {
            console.log('response.data is', id)
            getServerInfo();
        }).catch(error => {
            console.log('OOPS,', error)
        })
    }


    useEffect(() => {
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
                </tbody>
            </table>

        </>

    );


}

export default Admin;