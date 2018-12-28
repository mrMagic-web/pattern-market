import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Product from "./Product";

import Spinner from "../Spinner";
import NoProfile from "../Dashboard/NoProfile";
import ProfileActions from "./ProfileActions";

class Dashboard extends React.Component<any, any> {
	public constructor(props: any) {
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	public componentDidMount() {
		this.props.getCurrentProfile();
	}
	public onDeleteClick() {
		this.props.deleteAccount();
	}
	public render() {
		const { user } = this.props.auth;
		const { profile, loading } = this.props.profile;

		let dashboardContent;

		if (profile === null || loading) {
			dashboardContent = <Spinner />;
		} else {
			// Check if logged in user has profile data
			if (Object.keys(profile).length > 0) {
				dashboardContent = (
					<div>
						<p className="lead text-muted">
							Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
						</p>
						<ProfileActions />
						<Product products={profile.product} />
						<div className="mb-4" />
						<button onClick={this.onDeleteClick} className="btn btn-danger">
							Delete My Account
						</button>
					</div>
				);
			} else {
				// User is logged in but has no profile
				dashboardContent = <NoProfile />;
			}
		}

		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4">Dashboard</h1>
							{dashboardContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ getCurrentProfile, deleteAccount }
)(Dashboard);
