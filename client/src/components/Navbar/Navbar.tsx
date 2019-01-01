import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import "./Navbar.css";
class Navbar extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.onLogoutClick = this.onLogoutClick.bind(this);
	}
	public onLogoutClick(e: any) {
		e.preventDefault();
		this.props.clearCurrentProfile();
		this.props.logOutUser();
	}

	public render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link to={{ pathname: "/posts" }} className="nav-link">
						<i className="fas fa-comment-alt" /> Posts
					</Link>
				</li>
				<li className="nav-item">
					<Link to={{ pathname: "/dashboard" }} className="nav-link">
						<i className="fas fa-cogs mr-1" /> Dashboard
					</Link>
				</li>
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
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to={"/profiles"} className="nav-link">
									Profiles
								</Link>
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
	{ logOutUser, clearCurrentProfile }
)(Navbar);
