import * as React from 'react';
import { shallow } from 'enzyme';
import NoProfile from './NoProfile';

describe('<NoProfile />', () => {
  test('renders', () => {
    const wrapper = shallow(<NoProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
  