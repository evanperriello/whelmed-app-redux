import React from 'react';
import './AddItem.css';

const AddItem = (props)=>{
    return (
        <li className="add-item">
            <form className="add-item__form">
                <input className="add-item__input" type="text" placeholder="Add a new item"></input>
                <button className="add-item__button" type="submit">+</button>
            </form>
            </li>
    );
}

export default AddItem;