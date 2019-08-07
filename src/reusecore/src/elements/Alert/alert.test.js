import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Alert from './';

describe('<Alert /> Component', () => {
  it('renders without crashing', () => {
    shallow(<Alert />);
  });

  it('has a class name `reusecore__alert`', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.hasClass('reusecore__alert')).to.equal(true);
  });
});
