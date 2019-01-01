import * as React from "react";
import Company from "../Company";
import Location from "../Location";
import Title from "../Title";
import Description from "../Description";

const ProductContent = (product: any) => {
	const prod = product.product;
	return (
		<div className="col-md-6 card card-body bg-light">
			<Title title={prod.title} />
			<Company company={prod.company} />
			<Location location={prod.location} />
			<Description description={prod.description} />
		</div>
	);
};

export default ProductContent;
