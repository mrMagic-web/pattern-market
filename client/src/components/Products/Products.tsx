import * as React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getProducts } from "../../actions/profileActions";

class Products extends React.Component<any, any> {
  public componentDidMount() {
    this.props.getProducts();
  }
  public render() {
    const { product, loading } = this.props.product;
    const message = product > 0 ? <h4>Products here</h4> : <h4>No Products found</h4>;
    const productItems = product === null || loading ? <Spinner /> : message;

    return (
      <div className="products">
        <div className="container">vvv</div>
        {productItems}
        {console.log(product)}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  product: state.profile
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
