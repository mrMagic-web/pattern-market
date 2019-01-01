import * as React from "react";
import Company from "../Company";
import Location from "../Location";
import Title from "../Title";
import Description from "../Description";

const ProductContent = (product: any) => {
	return (
		<div>
			<Company />
			<Location />
			<Title />
			<Description />
		</div>
	);
};

export default ProductContent;
