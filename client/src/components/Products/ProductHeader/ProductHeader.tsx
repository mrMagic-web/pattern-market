import * as React from "react";
import { Link } from "react-router-dom";

const ProductHeader = () => {
	return (
		<div className="row">
			<div className="col-md-6">
				<Link to="/profiles" className="btn btn-light mb-3 float-left">
					Back to profiles
				</Link>
			</div>
			<div className="col-md-6" />
		</div>
	);
};

export default ProductHeader;
