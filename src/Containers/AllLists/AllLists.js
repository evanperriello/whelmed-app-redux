import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';

import {addList} from '../../redux-planning/actions';
import './AllLists.css';
 
class Lists extends Component {
    render(){
        const {lists} = this.props;
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