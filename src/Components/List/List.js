import React from 'react';
import './List.css';
import TrashIcon from './../../img/173-bin.svg';

import ListItem from '../ListItem/ListItem';
import AddItem from '../AddItem/AddItem';


const List = (props)=>{
    const {title, listId, listItems} = props;
    return (
        <div>
            <h3 className="list-title">
                {title}
            </h3>
            <ul className="single-list">
                {listItems.map(
                    (item)=>(
                        <ListItem 
                            key={item.id}
                            itemId = {item.id}
                            text={item.text} 
                            unfinished={item.unfinished}
                        />
                    )
                )}
                <AddItem/>
                <div className='single-list__delete'> 
                    <img src={TrashIcon} alt='trash can icon'/>
                    <span>&nbsp; delete list</span>
                </div>
            </ul>
        </div>
    );
}

export default List;