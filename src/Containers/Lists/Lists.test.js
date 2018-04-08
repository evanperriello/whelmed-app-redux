import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './Lists';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lists />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct number of lists', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lists />, div);
  expect(div.firstChild.childNodes.length).toEqual(2);
  ReactDOM.unmountComponentAtNode(div);
});
