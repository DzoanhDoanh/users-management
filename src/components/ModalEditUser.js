import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { updateUser } from '../services/userService';
import { toast } from 'react-toastify';


function ModalEditUser(props) {
    const {handleClose, show, dataUserEdit, handleEditUserFromModal} = props
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleEditUser = async () => {
        let res = await updateUser(firstName, lastName, email)
        if(res && res.updatedAt){
            handleEditUserFromModal({
                first_name: firstName,
                last_name: lastName,
                email: email,
                id: dataUserEdit.id
            })
            handleClose()
            toast.success("Update user success!")
        }
        else{
            toast.error("An error")
        }
    }

    useEffect(() => {
        if(show){
            setFirstName(dataUserEdit.first_name)
            setLastName(dataUserEdit.last_name)
            setEmail(dataUserEdit.email)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUserEdit])

    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit a user</Modal.Title>
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
            <Button variant="primary" onClick={handleEditUser}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}
export default ModalEditUser;
