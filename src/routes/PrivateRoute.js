import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';


function PrivateRoute(props) {

    const user = useSelector(state => state.user.account)
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