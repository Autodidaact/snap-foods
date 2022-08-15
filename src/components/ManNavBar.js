import React from "react";
import "bootstrap/dist/css/bootstrap-grid.css"
import { Routes, Route, Link } from "react-router-dom";
import { Nav,Navbar, Container } from "react-bootstrap";
import Home from "./Home";
import RestaurantDetails from "./RestaurantDetails"

const ManNavBar = () =>  {

    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Snap Foods</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/RestaurantDetails"}>Restauran Details</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact="true" path="/RestaurantDetails" element={<RestaurantDetails/>} />
                    <Route exact="true" path="/" element={<Home/>} />
                </Routes>
            </div>
        </div>   
    )
}
export default ManNavBar;