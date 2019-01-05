import * as React from 'react';
import { shallow } from 'enzyme';
import CommentFeed from './CommentFeed';

describe('<CommentFeed />', () => {
  test('renders', () => {
    const wrapper = shallow(<CommentFeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
  