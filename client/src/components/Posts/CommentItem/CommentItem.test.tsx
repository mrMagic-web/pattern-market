import * as React from 'react';
import { shallow } from 'enzyme';
import CommentItem from './CommentItem';

describe('<CommentItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<CommentItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  