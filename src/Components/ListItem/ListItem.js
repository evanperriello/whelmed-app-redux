import React from 'react';
import './ListItem.css';

const ListItem = (props)=>{
    return (
        <li className="list-item">
            <input type='checkbox' className='list-item__check'/>
            <span className='list-item__text'>I am a list item</span>
            <button className='list-item__delete'>x</button>
        </li>
    );
}

export default ListItem;