import React from 'react';
import './List.css';
import TrashIcon from './../../img/173-bin.svg';

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
                <div className='single-list__delete'>
                    <span>delete list </span> 
                    <img src={TrashIcon} alt='trash can icon'/>
                </div>
            </ul>
        </div>
    );
}

export default List;