import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ModalAddNew(props) {
    const {handleClose, show} = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const handleSaveUser = () => {
        
    }


    return (
        <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='body-add-new'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Job</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}/>
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
