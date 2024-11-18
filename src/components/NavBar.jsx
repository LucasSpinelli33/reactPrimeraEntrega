import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from '../cssModules/NavBar.module.css';  
import CartWidget from './CartWidget';  
import logo from '../assets/img/Logo-City.png'; 


function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className={`py-3 ${styles.navbar}`}>
        <Container>
            <Link to='/reactPrimeraEntrega/'>
                <img src={logo} alt="Logo" className={styles.navbarImg} />
            </Link>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/category/mesas" className={`${styles.navLink} ${styles.navLinkHover}`}>Mesas</Nav.Link>
                    <Nav.Link as={Link} to="/category/sillas" className={`${styles.navLink} ${styles.navLinkHover}`}>Sillas</Nav.Link>
                    <Nav.Link as={Link} to="/category/camas" className={`${styles.navLink} ${styles.navLinkHover}`}>Camas</Nav.Link>
                    <Nav.Link as={Link} to="/category/sofas" className={`${styles.navLink} ${styles.navLinkHover}`}>Sofás</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <CartWidget className={styles.cartWidget} />
        </Container>
    </Navbar>
    );
}

export default NavBar;