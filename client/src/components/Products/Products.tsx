import * as React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProductByUserHandle } from "../../actions/profileActions";
import ProfileContent from "./ProfileContent";

class Products extends React.Component<any, any> {
	public componentDidMount() {
		const { handle } = this.props.match.params;
		if (handle) {
			this.props.getProductByUserHandle(handle);
		}
	}
	public render() {
		const { profile, loading } = this.props;
		const profileContent = profile === null || loading ? <Spinner /> : <ProfileContent profile={profile} />;

		return (
			<div className="profile">
				<div className="container">{profileContent}</div>
			</div>
		);
	}
}
const mapStateToProps = (state: any) => ({
	product: state.profile.profile
});

export default connect(
	mapStateToProps,
	{ getProductByUserHandle }
)(Products);
