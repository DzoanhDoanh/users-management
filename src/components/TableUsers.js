import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/userService';

function TableUsers(props) {

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        //call api
        getAllUsers()
    }, [])

    const getAllUsers = async () =>{
        let res = await fetchAllUsers();
        if(res && res.data){
            setListUsers(res.data)
        }
    }
    return ( 
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users=${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
     );
}

export default TableUsers;