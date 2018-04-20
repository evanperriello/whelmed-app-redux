import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';

import {addList} from '../../redux-planning/actions';
import './AllLists.css';
 
const testingListItems = [
    {
        id: 1,
        term: 'some text',
        active: true
    },
    {
        id: 2,
        term: 'other text',
        active: true
    },
    {
        id: 3,
        term: 'yet other text',
        active: true
    }
];
const listTitle = "A List";

class Lists extends Component {
    
    render(){
        return (
            <div className="all-lists">
                {this.props.lists.map((list)=>{
                    return (
                        <div className="list-container">
                            <List title={listTitle} listItems={testingListItems}/>
                        </div>   
                    )
                })}
                
                <AddList/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        lists: state.sample
    });

const mapDispatchToProps = dispatch => ({
    addList: title => dispatch(addList(title))
})

export default connect(mapStateToProps)(Lists);