import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import './NavBarTop.css';
import '../App.css';

// Secciones
import HeaderSection from './HeaderSection';

const NavBarTop = () => {

    return (
        <>  
            {/* <Container fluid> */}
                <Navbar clasName = "navbar navbar-light shadow-sm p-3 mb-1" bg="dark" variant="dark">
                    <Navbar.Brand className = "personal-brand" href="/">Alejo Jiménez</Navbar.Brand>
                    <Nav className = "navbar ml-auto navbar-inner">
                        <Link className = "nav-item active nav-link" to = '/inicio' >Inicio</Link>
                        <Link className = "nav-item nav-link" href="#AboutMe" to = '/quien-soy/' >Quien soy</Link>
                        <Link className = "nav-item nav-link" href="#Projects" to = '/proyectos/' >Proyectos</Link>
                        <Link className = "nav-item nav-link" href="#Skills" to = '/formacion/' >Formación</Link>
                        <Link className = "nav-item nav-link" href="#Contact" to = '/contacto/' >Contacto</Link>
                    </Nav>
                </Navbar>
                <HeaderSection 
                    regars = 'Hola, yo soy' 
                    name = 'Alexander José Jiménez'
                    title1 = '  Desarrollador'
                    title2 = 'Full Stack Junior'
                />
            {/* </Container> */}
        </>
    )
}

export default NavBarTop;