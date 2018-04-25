import React, {Component} from 'react';
import './AddItem.css';

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleFormSubmit(e){
        e.preventDefault();
        const {addItem} = this.props;
        addItem(this.state.text);
        this.setState({
            text:''
        });
    }
    handleInputChange(e){
        this.setState({
            text:e.target.value
        })
    }
    render(){
        
        return (
            <li className="add-item">
                <form className="add-item__form" onSubmit={this.handleFormSubmit}>
                    <input
                        value={this.state.text}
                        onChange={this.handleInputChange} className="add-item__input" type="text" placeholder="Add a new item"
                    ></input>
                    <button className="add-item__button" type="submit">+</button>
                </form>
            </li>
        );
    }

}
    

export default AddItem;