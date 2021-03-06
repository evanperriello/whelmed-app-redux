import React, {Component} from 'react';
import './AddList.css';

class AddList extends Component{
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            title: ''
        };
    }
    handleFormSubmit(e){
        e.preventDefault();
        if (this.state.title){
            this.props.submitNewList(this.state.title);
            this.setState({
                title: ''
            });
        }
       
    }
    handleInputChange(e){
        this.setState(
            {title: e.target.value}
        )
        
    }
    render(){
        return (
            <div className="add-list">
                <h3 className='list-title'>Add a New List</h3>
                <form onSubmit={this.handleFormSubmit} className="add-list__form">
                    <input className="add-list__input" type="text" placeholder="New list title" value={this.state.title} onChange={this.handleInputChange}></input>
                    <button className="add-list__button" type="submit">+</button>
                </form>
            </div>
    
        );
    }
}

export default AddList;