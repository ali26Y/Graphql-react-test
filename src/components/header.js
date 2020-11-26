import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import logo from '../logo.svg';

const Header = () => (
    <Navbar collapseOnSelect className="App-header">
        <Navbar.Header>
            <Navbar.Brand>
                <img src={logo} className="App-logo" alt="qantas-assure-logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/faqs">
                    Faqs
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;
