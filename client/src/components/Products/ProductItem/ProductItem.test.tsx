import * as React from 'react';
import { shallow } from 'enzyme';
import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProductItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
  