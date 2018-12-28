import * as React from "react";
import { shallow } from "enzyme";
import ProfileItem from "./";

describe("<ProfileItem />", () => {
	test("renders", () => {
		const wrapper = shallow(<ProfileItem />);
		expect(wrapper).toMatchSnapshot();
	});
});
