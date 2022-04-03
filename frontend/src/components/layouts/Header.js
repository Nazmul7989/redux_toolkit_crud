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
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Header;