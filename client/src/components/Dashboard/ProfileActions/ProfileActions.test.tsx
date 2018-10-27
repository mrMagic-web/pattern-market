import * as React from 'react';
import { shallow } from 'enzyme';
import ProfileActions from './ProfileActions';

describe('<ProfileActions />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProfileActions />);
    expect(wrapper).toMatchSnapshot();
  });
});
  