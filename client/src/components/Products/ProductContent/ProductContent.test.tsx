import * as React from "react";
import { shallow } from "enzyme";
import ProductContent from "./ProductContent";

describe("<ProductContent />", () => {
	test("renders", () => {
		const wrapper = shallow(<ProductContent />);
		expect(wrapper).toMatchSnapshot();
	});
});
