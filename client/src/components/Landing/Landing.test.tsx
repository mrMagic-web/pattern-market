import { shallow } from "enzyme";
import * as React from "react";
import Landing from "./Landing";

describe("<Landing />", () => {
  test("renders", () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
