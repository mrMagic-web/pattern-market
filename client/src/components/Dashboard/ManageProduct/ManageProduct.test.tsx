import * as React from 'react';
import { shallow } from 'enzyme';
import ManageProduct from './ManageProduct';

describe('<ManageProduct />', () => {
  test('renders', () => {
    const wrapper = shallow(<ManageProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
  