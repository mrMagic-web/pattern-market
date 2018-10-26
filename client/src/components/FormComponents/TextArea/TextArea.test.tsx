import * as React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  test('renders', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper).toMatchSnapshot();
  });
});
  