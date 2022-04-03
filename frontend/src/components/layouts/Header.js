import React, {Fragment} from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="mx-2">Home</Link>
                        <Link to="/about" className="mx-2">About</Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;