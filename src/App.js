import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home';
import AuthRedirect from './components/pages/AuthRedirect';
import NavWrapper from "./components/layout/NavWrapper";
import Contributors from "./components/pages/Contributors";
import Repositories from "./components/pages/Repositories";
import Contributions from "./components/pages/Contributions";
import Settings from "./components/pages/Settings";

import React from "react";
import Container from "react-bootstrap/cjs/Container";

function App() {
    return (
        <Router>
            <div id="wrapper">
                <NavWrapper/>
                <Container fluid id="page-content-wrapper">
                    <Switch>
                        <Route path="/home" exact component={Home}/>
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