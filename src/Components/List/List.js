import React, {Component} from 'react';
import uuid from 'uuid';

import './List.css';


import ListItem from '../ListItem/ListItem';
import AddItem from '../AddItem/AddItem';

 
class List extends Component {
    constructor(props){
        super(props);

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(text){
        let newItems = [
            ...this.props.listItems,
            {text, id: uuid(), unfinished:true }
        ]
        this.props.addItem(newItems, this.props.listId);
    }


    render(){
        const {title, listId, listItems} = this.props;
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
                    <AddItem addItem={this.handleAddItem}/>
                    
                </ul>
            </div>
        );
    }

}

export default List;