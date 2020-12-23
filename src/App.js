import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import AuthRedirect from './pages/AuthRedirect';
import Contributors from "./pages/Contributors";
import Repositories from "./pages/Repositories";
import Contributions from "./pages/Contributions";
import Settings from "./pages/Settings";
import GoogleLogin from "./components/auth/GoogleLogin";
import ContainerWithNav from "./layout/ContainerWithNav";

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