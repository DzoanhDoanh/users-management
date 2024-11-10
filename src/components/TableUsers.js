import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/userService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';
import _ from 'lodash';

function TableUsers(props) {

    const [listUsers, setListUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [dataUserEdit, setDataUserEdit] = useState({})

    const handleClose = () => {
        setIsShowModalAddNew(false)
        setIsShowModalEdit(false)
    }

    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers])
    }
    useEffect(() => {
        //call api
        getUsers(1)
    }, [])

    const getUsers = async (page) =>{
        let res = await fetchAllUsers(page);
        if(res && res.data){
            setListUsers(res.data)
            setTotalUsers(res.total)
            setTotalPages(res.total_pages)
        }
    }

    const handlePageClick = (e) => {
        getUsers(+e.selected + 1)
    }

    const handleEditUser = (user) => {
        setDataUserEdit(user)
        setIsShowModalEdit(true)
    }

    const handleEditUserFromModal = (user) => {
        let cloneListUsers = _.cloneDeep(listUsers)
        let index = listUsers.findIndex((item) => item.id === user.id)
        cloneListUsers[index].first_name = user.first_name
        cloneListUsers[index].last_name = user.last_name
        cloneListUsers[index].email = user.email

        setListUsers(cloneListUsers)
    }
    return ( 
        <>
            <div className='my-3 add-new d-flex justify-content-between align-items-center'>
                <span> 
                    <b>
                    List users: 
                    </b>
                </span> 
                <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
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
                                    <td>
                                        <button className='btn btn-warning me-3' onClick={() => handleEditUser(item)}>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
            <ModalAddNew handleUpdateTable={handleUpdateTable} show={isShowModalAddNew} handleClose={handleClose}/>
            <ModalEditUser handleEditUserFromModal={handleEditUserFromModal} show={isShowModalEdit} dataUserEdit={dataUserEdit} handleClose={handleClose}/> 
        </>
     );
}

export default TableUsers;