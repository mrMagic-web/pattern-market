import * as React from "react";
import { shallow } from "enzyme";
import Location from "./Location";

describe("<Location />", () => {
	test("renders", () => {
		const wrapper = shallow(<Location location="Location" />);
		expect(wrapper).toMatchSnapshot();
	});
});
