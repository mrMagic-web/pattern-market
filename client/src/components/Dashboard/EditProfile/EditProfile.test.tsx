import * as React from 'react';
import { shallow } from 'enzyme';
import EditProfile from './EditProfile';

describe('<EditProfile />', () => {
  test('renders', () => {
    const wrapper = shallow(<EditProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
  