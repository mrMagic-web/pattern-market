import * as React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProducts } from "../../actions/profileActions";
import ProfileItem from "./ProfileItem";

class Profiles extends React.Component<any, any> {
	public componentDidMount() {
		this.props.getProducts();
	}
	public render() {
		const { product, loading } = this.props.profiles;
		const message =
			product !== undefined ? (
				product.map((prod: any) => <ProfileItem key={prod._id} profile={prod} />)
			) : (
				<h4>No Products found</h4>
			);
		const profileItems = product === null || loading ? <Spinner /> : message;

		return <div className="products">{profileItems}</div>;
	}
}

const mapStateToProps = (state: any) => ({
	profiles: state.profile
});

export default connect(
	mapStateToProps,
	{ getProducts }
)(Profiles);
