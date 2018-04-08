import React, {Component} from 'react';

import List from '../../Components/List/List';
import './ListContainer.css';

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
const listTitle = "A List";


class ListContainer extends Component {

    render(){
        return (
            <div className="list-container">
                <List title={listTitle} listItems={testingListItems}/>
            </div>
        );
    }
}


export default ListContainer;