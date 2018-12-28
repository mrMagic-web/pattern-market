import * as React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

describe('<Description />', () => {
  test('renders', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toMatchSnapshot();
  });
});
  