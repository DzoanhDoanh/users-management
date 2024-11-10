import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUsers } from '../services/userService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';

function TableUsers(props) {

    const [listUsers, setListUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)

    const handleClose = () => {
        setIsShowModalAddNew(false)
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

        </>
     );
}

export default TableUsers;