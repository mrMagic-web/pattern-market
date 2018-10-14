import { shallow } from "enzyme";
import * as React from "react";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  test("renders", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
