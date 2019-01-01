import * as React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("<Title />", () => {
	test("renders", () => {
		const wrapper = shallow(<Title title="Title" />);
		expect(wrapper).toMatchSnapshot();
	});
});
