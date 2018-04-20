import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '../../Components/List/List';
import AddList from '../../Components/AddList/AddList';

import {sampleAction, addList} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './AllLists.css';
 
class Lists extends Component {
    constructor(props){
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(e){
        e.preventDefault();
        this.props.sampleAction();
    }
    render(){
        const {lists, sampleAction} = this.props;
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
                <button onClick={this.handleButtonClick}>Give me some sweet sample data</button>
                <AddList submitNewList={this.props.addList}/>
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
            sampleAction: sampleAction,
            addList: addList
        }, 
        dispatch
    );
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);