import * as React from 'react';
import { shallow } from 'enzyme';
import CommentForm from './CommentForm';

describe('<CommentForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
  