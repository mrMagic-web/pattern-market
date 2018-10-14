import { shallow } from "enzyme";
import * as React from "react";
import Register from "./Register";

describe("<Register />", () => {
  test("renders", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
