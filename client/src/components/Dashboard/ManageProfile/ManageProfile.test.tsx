import * as React from "react";
import { shallow } from "enzyme";
import ManageProfile from "./ManageProfile";

describe("<ManageProfile />", () => {
  test("renders", () => {
    const wrapper = shallow(<ManageProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
