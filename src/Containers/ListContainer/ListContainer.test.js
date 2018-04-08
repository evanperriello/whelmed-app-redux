import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './ListContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
