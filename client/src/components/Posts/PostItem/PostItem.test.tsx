import * as React from 'react';
import { shallow } from 'enzyme';
import PostItem from './PostItem';

describe('<PostItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  