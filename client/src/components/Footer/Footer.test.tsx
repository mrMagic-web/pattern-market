import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from './Footer';

describe('<Footer />', () => {
  test('renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
  