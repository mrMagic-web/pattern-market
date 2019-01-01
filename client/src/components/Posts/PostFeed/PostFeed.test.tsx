import * as React from 'react';
import { shallow } from 'enzyme';
import PostFeed from './PostFeed';

describe('<PostFeed />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostFeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
  