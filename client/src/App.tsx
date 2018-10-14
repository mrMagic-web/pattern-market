import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <div className="container">
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
