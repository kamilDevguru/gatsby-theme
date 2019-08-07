import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CheckBox from './index';

it('<CheckBox> Component render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
