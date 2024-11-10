import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../services/userService';
import { toast } from 'react-toastify';

function ModalComfirm(props) {
    const {handleClose, show, dataUserDelete, handleDeleteUserFromModal} = props

    const confirmDelete = async() => {
        let res = await deleteUser(dataUserDelete.id)
        if(res && +res.statusCode === 204){
            handleClose()
            toast.success("Delete user success!")
            handleDeleteUserFromModal(dataUserDelete)
        }
        else{
            toast.error("Error")
        }
    }

    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Delete new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Are you sure to delete user <b>{dataUserDelete.email}</b>?
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={confirmDelete}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}
export default ModalComfirm;
