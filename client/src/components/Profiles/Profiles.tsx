import * as React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProducts } from "../../actions/profileActions";
import ProductItem from "./ProductItem";

class Profiles extends React.Component<any, any> {
	public componentDidMount() {
		this.props.getProducts();
	}
	public render() {
		const { product, loading } = this.props.product;
		const message =
			product !== undefined ? (
				product.map((prod: any) => <ProductItem key={product.id} product={prod} />)
			) : (
				<h4>No Products found</h4>
			);
		const productItems = product === null || loading ? <Spinner /> : message;

		return <div className="products">{productItems}</div>;
	}
}

const mapStateToProps = (state: any) => ({
	product: state.profile
});

export default connect(
	mapStateToProps,
	{ getProducts }
)(Profiles);
