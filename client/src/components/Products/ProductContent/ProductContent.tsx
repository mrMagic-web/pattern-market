import * as React from "react";
import Company from "../Company";
import Location from "../Location";
import Title from "../Title";
// import Description from "../Description";

const ProductContent = (product: any) => {
	const prod = product.product;
	return (
		<div>
			<Company company={prod.company} />
			<Location location={prod.location} />
			<Title title={prod.title} />
			{prod.description}
			{/* <Description description={prod.description} /> */}
		</div>
	);
};

export default ProductContent;
