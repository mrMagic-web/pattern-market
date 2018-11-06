import * as React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../../actions/profileActions";

class Product extends React.Component<any, any> {
  public onDeleteProduct(id: string) {
    this.props.deleteProduct(id);
  }
  public render() {
    const products = this.props.products.map((prod: any) => (
      <tr key={prod._id}>
        <td>{prod.company}</td>
        <td>{prod.title}</td>
        <td>
          <button
            onClick={this.onDeleteProduct.bind(this, prod._id)}
            className="btn btn-danger"
          >
            x
          </button>
        </td>
      </tr>
    ));

    if (this.props.products.length === 0) {
      return null;
    }
    return (
      <div className="product">
        <h4 className="mb-4">Products</h4>
        <table className="table">
          <thead>
            <tr>
              <td>Company</td>
              <td>Title</td>
              <td />
            </tr>
          </thead>
          <tbody>{products}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteProduct }
)(Product);
