import React, { Component } from 'react'
import { Navbar, Form, Container, Nav, NavLink, Button, FormControl } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import Home from '../Pages/Home.js'
import About from '../Pages/About.js'
import Contacts from '../Pages/Contacts.js'
import Blog from '../Pages/Blog.js'

export default class Header extends Component {

    render() {
        return (
            <>
                <Router>            
                <Navbar  collapseOnSelect expand="ms" bg="light" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src="https://st.depositphotos.com/1011728/5011/i/600/depositphotos_50116953-stock-photo-red-lipstick.jpg"
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="forest"
                            /> Beauty Parlor
                        </Navbar.Brand> 
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto">
                                <NavLink as={Link} to ="/">Home</NavLink>
                                <NavLink as={Link} to="/about">About us</NavLink>
                                <NavLink as={Link} to="/contacts">Contacts</NavLink>
                                <NavLink as={Link} to="/blog">Blog</NavLink>
                                
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outilo-dark">
                                    Search
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                
                    <Routes>
                        <Route exact path = "/" element={<Home />} />
                        <Route exact path = "/about" element={<About/>} />
                        <Route exact path = "/contacts" element={<Contacts />} />
                        <Route exact path = "/blog" element={<Blog />} />
                    </Routes>
                </Router>


            </>
        )
    }

}