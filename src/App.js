import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Home from './components/Home';
import AuthRedirect from './components/AuthRedirect';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/callback" component={AuthRedirect} />
            <Route component={()=>(<p>Not Found</p>)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;