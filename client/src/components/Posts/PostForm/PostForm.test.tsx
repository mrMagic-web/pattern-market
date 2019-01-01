import * as React from 'react';
import { shallow } from 'enzyme';
import PostForm from './PostForm';

describe('<PostForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
  