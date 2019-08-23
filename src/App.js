import React from "react";
import { Button, Navbar, Alignment } from "@blueprintjs/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import UserDetailsPage from "./UserDetailsPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Link to="/">
              <Button icon="home" text="Home" minimal={true} intent="primary" />
            </Link>
            <Link to="/users">
              <Button
                icon="user"
                text="Users"
                minimal={true}
                intent="primary"
              />
            </Link>
            <Link to="/admin">
              <Button icon="cog" text="Admin" minimal={true} intent="primary" />
            </Link>
          </Navbar.Group>
        </Navbar>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UserPage} />
          <Route path="/user/:userId" component={UserDetailsPage} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
