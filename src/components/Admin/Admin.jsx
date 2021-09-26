import axios from 'axios';
import { useState, useEffect } from 'react';



function Admin(){
    const [adminData, setAdminData] = useState([]);

    const getServerInfo = () =>{
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            setAdminData(response)
            console.log(response)
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
            </table>

        </>



    );


}

export default Admin;