import React from 'react';
import Stack from '../Stack';
import { shallow } from '~/testing/enzyme';

describe('Stack tests', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Stack />);
    expect(wrapper.find('Stack')).toBeDefined();
  });
});
