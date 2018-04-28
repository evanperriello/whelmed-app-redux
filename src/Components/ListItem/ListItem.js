import React from 'react';
import './ListItem.css';
//Rendered by List.js component
const ListItem = (props)=>{
    const { text, unfinished, deleteItem, checkItem } = props;

    return (
        <li className="list-item">
            <input type='checkbox' className='list-item__check' defaultChecked={!unfinished} onChange={checkItem}/>
            <span className={`list-item__text ${!unfinished ? 'list-item__text--done' : ''}`}>{text}</span>
            <button className='list-item__delete' onClick={deleteItem}>x</button>
        </li>
    );
}


export default ListItem;