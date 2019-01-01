import * as React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProductByUserHandle } from "../../actions/profileActions";
import ProductContent from "./ProductContent";
import ProductHeader from "./ProductHeader";

class Products extends React.Component<any, any> {
	public componentDidMount() {
		const { handle } = this.props.match.params;
		if (handle) {
			this.props.getProductByUserHandle(handle);
		}
	}
	public render() {
		const { profile, loading } = this.props;
		const productContent =
			profile === null || loading ? (
				<Spinner />
			) : (
				profile.product.map((prod: any) => <ProductContent key={prod._id} product={prod} />)
			);

		return (
			<div className="profile">
				<div className="container">
					<ProductHeader />
					<div className="row">{productContent}</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state: any) => ({
	profile: state.profile.profile
});

export default connect(
	mapStateToProps,
	{ getProductByUserHandle }
)(Products);
