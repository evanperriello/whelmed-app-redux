import React from 'react';
import './ListItem.css';
//Rendered by List.js component
const ListItem = (props)=>{
    const { itemId, text, unfinished } = props;
    const textClass = !unfinished ? 'list-item__text--done' : '';
    const inputCheck = !unfinished ? 
        <input type='checkbox' className='list-item__check' defaultChecked/> : 
        <input type='checkbox' className='list-item__check'/>;
        
    return (
        <li className="list-item">
            {inputCheck}
            <span className={`list-item__text ${textClass}`}>{text}</span>
            <button className='list-item__delete'>x</button>
        </li>
    );
}

export default ListItem;