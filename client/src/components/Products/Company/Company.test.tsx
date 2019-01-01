import * as React from "react";
import { shallow } from "enzyme";
import Company from "./Company";

describe("<Company />", () => {
	test("renders", () => {
		const wrapper = shallow(<Company company="Hello" />);
		expect(wrapper).toMatchSnapshot();
	});
});
