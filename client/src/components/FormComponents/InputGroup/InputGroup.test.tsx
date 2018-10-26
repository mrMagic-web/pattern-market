import * as React from 'react';
import { shallow } from 'enzyme';
import InputGroup from './InputGroup';

describe('<InputGroup />', () => {
  test('renders', () => {
    const wrapper = shallow(<InputGroup />);
    expect(wrapper).toMatchSnapshot();
  });
});
  