import * as React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('<Post />', () => {
  test('renders', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper).toMatchSnapshot();
  });
});
  