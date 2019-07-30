import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Select from './';

describe('<Select /> Component', () => {
  it('renders without crashing', () => {
    shallow(<Select />);
  });

  it('has a class name `reusecore__select`', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper.hasClass('reusecore__select')).to.equal(true);
  });
});
