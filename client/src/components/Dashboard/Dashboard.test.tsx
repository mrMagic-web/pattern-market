import * as React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  test('renders', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
  