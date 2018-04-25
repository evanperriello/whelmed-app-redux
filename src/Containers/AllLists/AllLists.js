import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';


import {addList, addItem, deleteList} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './AllLists.css';
import TrashIcon from './../../img/173-bin.svg';
 
class Lists extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {lists, addList, addItem, deleteList} = this.props;
        return (
            <div className="all-lists">
                {Object.keys(lists).map((listId)=>{
                    const {title, items} = lists[listId];
                    return (
                        <div key={listId} className="list-container">
                            <List 
                                listId={listId} 
                                title={title} 
                                listItems={items} 
                                addItem={addItem} 
                                deleteList={deleteList}/>
                                <div 
                                    className='single-list__delete' onClick={()=>{deleteList(listId)}}> 
                                        <img src={TrashIcon} alt='trash can icon'
                                />
                                <span>&nbsp; delete list</span>
                            </div>
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
            addItem,
            addList,
            deleteList
        }, 
        dispatch
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);