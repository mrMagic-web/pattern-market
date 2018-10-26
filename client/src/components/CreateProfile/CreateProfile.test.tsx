import * as React from 'react';
import { shallow } from 'enzyme';
import CreateProfile from './CreateProfile';

describe('<CreateProfile />', () => {
  test('renders', () => {
    const wrapper = shallow(<CreateProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
  