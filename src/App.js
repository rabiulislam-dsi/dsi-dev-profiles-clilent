import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './pages/Home';
import AuthRedirect from './pages/AuthRedirect';
import NavWrapper from "./layout/NavWrapper";
import Contributors from "./pages/Contributors";
import Repositories from "./pages/Repositories";
import Contributions from "./pages/Contributions";
import Settings from "./pages/Settings";

import Container from "react-bootstrap/cjs/Container";

function App() {
    return (
        <Router>
            <div id="wrapper">
                <NavWrapper/>
                <Container fluid id="page-content-wrapper">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={Home}/>
                        <Route path="/contributors" component={Contributors}/>
                        <Route path="/repositories" component={Repositories}/>
                        <Route path="/contributions" component={Contributions}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/callback" component={AuthRedirect}/>
                        <Route component={() => (<p>Not Found</p>)}/>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;