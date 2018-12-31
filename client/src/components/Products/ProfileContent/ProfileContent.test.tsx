import * as React from 'react';
import { shallow } from 'enzyme';
import ProfileContent from './ProfileContent';

describe('<ProfileContent />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProfileContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  