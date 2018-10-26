import * as React from "react";
import * as jwt_decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logOutUser } from "./actions/authActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { clearCurrentProfile } from "./actions/profileActions";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";

const localToken = localStorage.jwtToken;

// Check for token
if (localToken) {
  // Set auth token header auth
  setAuthToken(localToken);
  // decode token and get user info and exp
  const decoded: any = jwt_decode(localToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const curentTime = Date.now() / 1000;
  if (decoded.exp < curentTime) {
    store.dispatch(logOutUser());
    store.dispatch(clearCurrentProfile());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <div className="container">
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/login" component={Login} />
              <Switch>
                <PrivateRoute
                  exact={true}
                  path="/dashboard"
                  component={Dashboard}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
