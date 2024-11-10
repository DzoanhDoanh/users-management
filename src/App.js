import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import ModalAddNew from './components/ModalAddNew';


function App() {

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)

  const handleClose = () => {
    setIsShowModalAddNew(false)
  }
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className='my-3 add-new d-flex justify-content-between align-items-center'>
          <span> 
              <b>
                List users: 
              </b>
            </span> 
          <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew show={isShowModalAddNew} handleClose={handleClose}/>
    </div>
  );
}

export default App;
