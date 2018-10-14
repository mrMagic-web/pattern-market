import { shallow } from "enzyme";
import * as React from "react";
import Login from "./Login";

describe("<Login />", () => {
  test("renders", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
