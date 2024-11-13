import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Alert from 'react-bootstrap/Alert';


function PrivateRoute(props) {

    const {user} = useContext(UserContext) 
    
    if(user && !user.auth){
        return <>
            <Alert variant="danger"  className='mt-3'>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You must login to use this feature.
                </p>
            </Alert>
        </>
    }
    return ( 
        <>
            {props.children}
        </> 
    );
}

export default PrivateRoute;