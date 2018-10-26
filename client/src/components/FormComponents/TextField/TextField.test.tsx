import * as React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('<TextField />', () => {
  test('renders', () => {
    const wrapper = shallow(<TextField />);
    expect(wrapper).toMatchSnapshot();
  });
});
  