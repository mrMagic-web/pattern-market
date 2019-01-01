import * as React from 'react';
import { shallow } from 'enzyme';
import ProductHeader from './ProductHeader';

describe('<ProductHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProductHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
  