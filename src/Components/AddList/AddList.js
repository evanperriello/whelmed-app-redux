import React, {Component} from 'react';
import './AddList.css';

class AddList extends Component{
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(e){
        e.preventDefault();
        this.props.submitNewList('Chicken Listin');
    }
    render(){
        return (
            <div className="add-list">
                <h3 className='list-title'>Add a New List</h3>
                <form onSubmit={this.handleFormSubmit} className="add-list__form">
                    <input className="add-list__input" type="text" placeholder="New list title"></input>
                    <button className="add-list__button" type="submit">+</button>
                </form>
            </div>
    
        );
    }
}

export default AddList;