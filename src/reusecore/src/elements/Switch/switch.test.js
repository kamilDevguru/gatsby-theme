import React from 'react';
import ReactDOM from 'react-dom';
import Switch from './';

it('<Switch> Component render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Switch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
