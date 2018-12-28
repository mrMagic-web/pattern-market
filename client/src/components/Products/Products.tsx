import * as React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router";
import Company from "./Company";
import Location from "./Location";
import Title from "./Title";
import Description from "./Description";
import Spinner from "../Spinner";
import { getProductByUserHandle } from "../../actions/profileActions";

class Products extends React.Component<any, any> {
	public componentDidMount() {
		const { handle } = this.props.match.params;
		if (handle) {
			this.props.getProductByUserHandle(handle);
		}
	}
	public render() {
		if (false) {
			return <Spinner />;
		}
		return (
			<div>
				<Company />
				<Location />
				<Title />
				<Description />
				{/* <Link>Link</Link> */}
				{console.log(this.props)}
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
