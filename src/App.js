import { Route, Switch } from "react-router-dom";
import WelcomePage from './components/welcome/Welcome'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/signup" component={() => { return <WelcomePage page='signup' /> }} />
        <Route exact path="/login" component={() => { return <WelcomePage page='login' /> }} />
      </Switch>
    </div>
  );
}

export default App;
