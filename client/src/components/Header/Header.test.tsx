import { shallow } from "enzyme";
import * as React from "react";
import Header from "./Header";

describe("<Header />", () => {
  test("renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
