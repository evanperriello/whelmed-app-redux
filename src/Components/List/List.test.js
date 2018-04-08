import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const testingListItems = [
  {
      id: 1,
      term: 'some text',
      active: true
  },
  {
      id: 2,
      term: 'other text',
      active: true
  },
  {
      id: 3,
      term: 'yet other text',
      active: true
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List listItems={testingListItems}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct number of items in the list', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<List listItems={testingListItems}/>, div);
  expect(div.firstChild.firstChild.childNodes.length).toEqual(3);
  ReactDOM.unmountComponentAtNode(div);
});
