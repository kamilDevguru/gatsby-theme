import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './';

describe('<Navbar /> Component', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('has a class name `reusecore__navbar`', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.hasClass('reusecore__navbar')).to.equal(true);
  });
});
