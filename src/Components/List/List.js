import React from 'react';
import './List.css';

import ListItem from '../ListItem/ListItem';
import AddItem from '../AddItem/AddItem';

const List = (props)=>{
    return (
        <div>
            <h3 className="list-title">
                {props.title}
            </h3>
            <ul className="single-list">
                {props.listItems.map((item)=>{return (<ListItem key={item.id}/>)})}
                <AddItem/>
            </ul>
        </div>
    );
}

export default List;