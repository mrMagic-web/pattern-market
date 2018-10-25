import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/authActions";
import "./Navbar.css";
class Navbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }
  public onLogoutClick(e: any) {
    e.preventDefault();
    this.props.logOutUser();
  }

  public render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={this.onLogoutClick}>
            <img src={user.avatar} alt={user.name} className="avatar" />
            Logout
          </a>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SewingPM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="profiles.html">
                  Designers
                </a>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Navbar);
