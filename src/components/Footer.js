import { Row, Col } from "react-bootstrap";

function Footer() {
    return ( 
        <div className="bg-dark text-white py-4 mt-5">
            <div className="container">
                <Row>
                    <Col md={6}>
                    <h5>Contact me</h5>
                    <p>Email: dovandoanh2k3@gmail.com</p>
                    <p>Phone: 0962348926</p>
                    </Col>
                    <Col md={6} className="text-md-end">
                    <h5>Follow me</h5>
                    <p>Facebook | Twitter | LinkedIn</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-3">
                    <p>&copy; 2024 User Management System. All Rights Reserved.</p>
                    </Col>
                </Row>
            </div>
        </div> 
    );
}

export default Footer;