import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Footer from "./Footer";

function Home() {

    return (
        <>
            <Container fluid className="py-4">
                <Row>
                    <Col>
                    <h1 className="text-center mb-4">Welcome to User Management System</h1>
                    <p className="text-center text-muted">
                        Manage users efficiently with powerful features.
                    </p>
                    </Col>
                </Row>
            
                <Row className="justify-content-center">
                    <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-dark text-white">
                        <h5>Website Features</h5>
                        </Card.Header>
                        <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>🔑 <strong>Login:</strong> Secure user login system.</ListGroup.Item>
                            <ListGroup.Item>🔓 <strong>Logout:</strong> Log out safely.</ListGroup.Item>
                            <ListGroup.Item>➕ <strong>Add User:</strong> Easily add new users to the system.</ListGroup.Item>
                            <ListGroup.Item>✏️ <strong>Update User:</strong> Edit user information effortlessly.</ListGroup.Item>
                            <ListGroup.Item>🗑️ <strong>Delete User:</strong> Remove unwanted users from the database.</ListGroup.Item>
                            <ListGroup.Item>📋 <strong>Display List Users:</strong> View a comprehensive list of all users.</ListGroup.Item>
                            <ListGroup.Item>🔍 <strong>Search by Email:</strong> Quickly find users by their email addresses.</ListGroup.Item>
                            <ListGroup.Item>↕️ <strong>Sort by Firstname:</strong> Sort users alphabetically.</ListGroup.Item>
                            <ListGroup.Item>📤 <strong>Export List:</strong> Export the user list to a CSV file.</ListGroup.Item>
                            <ListGroup.Item>📱 <strong>Responsive Design:</strong> Access the website on any device.</ListGroup.Item>
                            <ListGroup.Item>✏️ <strong>Note:</strong> You must login to use website features (email: eve.holt@reqres.in, password: balabala) go to settings - login</ListGroup.Item>
                        </ListGroup>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
      )
};
export default Home;