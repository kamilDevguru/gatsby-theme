import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './index';

describe('<Button> Component', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick} />);
    wrapper.simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('renders title when passed in', () => {
    const wrapper = shallow(<Button title="hello" />);
    expect(wrapper.contains(<span className="btn-text">hello</span>)).to.equal(
      true
    );
  });

  it('has a class name `reusecore__button`', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('reusecore__button')).to.equal(true);
  });
});
