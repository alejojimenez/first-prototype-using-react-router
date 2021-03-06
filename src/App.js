import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//secciones 
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Footer from './views/Footer';

const App = () => {
  return (
    <Container className = "body-style">
      <BrowserRouter>
        <Row>
          <Col>
            <Home />
          </Col>
        </Row>
        <Switch>
          <Route exact path = '/acerca-de-mi/' component = {AboutMe} />
          <Route exact path = '/proyectos/' component = {Projects} />
          <Route exact path = '/formacion/' component = {Skills} />
          <Route exact path = '/contacto/' component = {Contact} />
          {/* <Route render = {NotFound} /> */}
        </Switch>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
