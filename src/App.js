import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home';
import AuthRedirect from './components/pages/AuthRedirect';
import Contributors from "./components/pages/Contributors";
import Repositories from "./components/pages/Repositories";
import Contributions from "./components/pages/Contributions";
import Settings from "./components/pages/Settings";
import GoogleLogin from "./components/pages/GoogleLogin";
import ContainerWithNav from "./components/layout/ContainerWithNav";
import Container from "react-bootstrap/cjs/Container";

function App() {
    return (
        <Router>
            <div id="wrapper">                
                <Switch>
                    <Route path="/auth/signup" component={GoogleLogin}/>
                    <Route path="/auth/:authServer/callback" component={AuthRedirect}/>
                    
                    <ContainerWithNav>
                        <Route path="/home" exact component={Home}/>
                        <Route path="/contributors" component={Contributors}/>
                        <Route path="/repositories" component={Repositories}/>
                        <Route path="/contributions" component={Contributions}/>
                        <Route path="/settings" component={Settings}/>
                        <Route component={() => (<p>Not Found</p>)}/>
                    </ContainerWithNav>
                </Switch>
            </div>
        </Router>
    );
}

export default App;