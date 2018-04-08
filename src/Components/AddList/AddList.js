import React from 'react';
import './AddList.css';

const AddList = (props)=>{
    return (
        <div className="add-list">
            <h3 className='list-title'>Add a New List</h3>
            <form className="add-list__form">
                <input className="add-list__input" type="text" placeholder="New list title"></input>
                <button className="add-list__button" type="submit">+</button>
            </form>
        </div>

    );
}

export default AddList;