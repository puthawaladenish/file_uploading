import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CreateProfile from "../pages/CreateProfile";
import ViewProfiles from "../pages/ViewProfiles";

export default function navbar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div>
            <BrowserRouter>
                <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="/createProfile">
                            Create Data
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" onSelect={handleSelect} href="/viewAll">
                            View Data
                    </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" disabled>
                            NavLink 3 content
                    </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Switch>
                    <Route exact path="/createProfile" >
                        <CreateProfile />
                    </Route>
                    <Route exact path="/viewAll">
                        <ViewProfiles />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

