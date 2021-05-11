import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/about' exact component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
