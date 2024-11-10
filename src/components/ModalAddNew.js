import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { postUser } from '../services/userService';
import { toast } from 'react-toastify';


function ModalAddNew(props) {
    const {handleClose, show, handleUpdateTable} = props
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSaveUser = async() => {
        let res = await postUser(firstName, lastName, email)
        if(res && res.id){
            handleClose()
            setFirstName("")
            setLastName("")
            setEmail("")
            toast.success("A user is created success!")
            handleUpdateTable({first_name: firstName, last_name: lastName, id: res.id, email: email})
        }
        else{
            toast.error("An error...!")

        }
    }


    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='body-add-new'>
                <div className="mb-3">
                    <label className="form-label">First name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Last name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSaveUser}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}
export default ModalAddNew;
