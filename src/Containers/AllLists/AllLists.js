import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';

import {addList, addItem} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './AllLists.css';
 
class Lists extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {lists, addList} = this.props;
        return (
            <div className="all-lists">
                {Object.keys(lists).map((listId)=>{
                    const {title, items} = lists[listId];
                    return (
                        <div key={listId} className="list-container">
                            <List listId={listId} title={title} listItems={items}/>
                        </div>
                    )
                })}
                <AddList submitNewList={addList}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
        lists: state.allLists
    });

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            
            addList: addList
        }, 
        dispatch
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);