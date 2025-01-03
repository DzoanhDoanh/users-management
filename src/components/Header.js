/* eslint-disable no-mixed-operators */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoApp from '../assets/images/logo192.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogoutRedux } from '../redux/actions/userAction';
import { useEffect } from 'react';

function Header(props) {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.account)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(handleLogoutRedux())
    }
    useEffect(() => {
        if(user && user.auth === false && window.location.pathname !== '/login'){
            navigate('/login')
            toast.success("Logout success!")
        }
    }, [user])
    return ( 
        <>
            <Navbar expand="lg" className="bg-body-tertiary bg-light">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logoApp} width="30" height={'30'} className='d-inline-block align-top me-1' alt='Logo'/> 
                        <span>
                            Users Management
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {(user && user.auth || window.location.pathname === '/') && 
                        <>
                            <Nav className="me-auto">
                                <NavLink to={'/'} className='nav-link'>Home</NavLink>
                                <NavLink to={'/users'} className='nav-link'>Manage users</NavLink>
                            </Nav>
                            <Nav>
                                { user && user.email && <span className='nav-link'>Welcome <span className='fw-bold text-black'>{user.email}</span></span>}
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                    {user && user.auth === true ? (<NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>) : (<NavLink to={'/login'} className='dropdown-item'>Login</NavLink>)}
                                    
                                    
                                </NavDropdown>
                            </Nav>
                        </>
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}

export default Header;