import * as React from "react";
import { shallow } from "enzyme";
import Profiles from "./Profiles";

describe("<Profiles />", () => {
	test("renders", () => {
		const wrapper = shallow(<Profiles />);
		expect(wrapper).toMatchSnapshot();
	});
});
