import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';

import {addList, addItem, deleteList, deleteItem, checkItem} from '../../actions/index';

import {bindActionCreators} from 'redux';
import './AllLists.css';
import TrashIcon from './../../img/173-bin.svg';
 
class Lists extends Component {

    handleDeleteList(listId, lists){
        //Cool trick--use the rest spreading to divide the object into two objects: one with the key listId (here assigned to a variable foo) and one made up of all the other lists. Then return the one with the other lists, effectively deleting the one with key listId.
        const {[listId]: foo, ...rest} = lists;
        this.props.deleteList(rest);
    }

    render(){
        const {lists, addList, addItem, deleteItem, checkItem, toggleShow} = this.props;
        return (
            <div className="all-lists">
                {Object.keys(lists).map((listId)=>{
                    const {title, items} = lists[listId];
                    return (
                        <div key={listId} className="list-container">
                            <List 
                                listId={listId} 
                                title={title} 
                                listItems={
                                    toggleShow ? items: items.filter(item=>item.unfinished)
                                } 
                                addItem={addItem}
                                deleteItem={deleteItem}
                                deleteList={deleteList}
                                checkItem={checkItem}
                            />

                            <div 
                                className='single-list__delete'
                                onClick={
                                    //we bind this inline instead of in the constructor so that it has access to the variables in this context.
                                    this.handleDeleteList.bind(this, listId, lists)
                                } 
                            >
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
        lists: state.allLists,
        toggleShow: state.toggleShow
    });

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addItem,
            addList,
            deleteList,
            deleteItem,
            checkItem
        }, 
        dispatch
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);