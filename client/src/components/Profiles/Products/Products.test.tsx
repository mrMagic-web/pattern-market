import * as React from "react";
import { shallow } from "enzyme";
import Products from "./Products";

describe("<Products />", () => {
	test("renders", () => {
		const wrapper = shallow(<Products />);
		expect(wrapper).toMatchSnapshot();
	});
});
