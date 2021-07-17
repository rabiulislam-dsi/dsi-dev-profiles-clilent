import React, {useContext, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './pages/Home';
import AuthRedirect from './pages/AuthRedirect';
import Contributors from "./pages/Contributors";
import Repositories from "./pages/Repositories";
import Contributions from "./pages/Contributions";
import Settings from "./pages/Settings";
import GoogleLogin from "./components/auth/GoogleLogin";
import Layout from "./layout/Layout";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <div id="wrapper">
                <Switch>
                    <Layout>
                        <Redirect exact from="/" to="/home"/>
                        <Route path="/user/signup" component={GoogleLogin}/>
                        <Route path="/auth/:authServer/callback" component={AuthRedirect}/>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/contributors" component={Contributors}/>
                        <Route path="/repositories" component={Repositories}/>
                        <Route path="/contributions" component={Contributions}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/error/:code?" component={Error}/>
                        <Redirect exact from="*" to="/error"/>
                    </Layout>
                </Switch>
            </div>
        </Router>
    );
}

export default App;