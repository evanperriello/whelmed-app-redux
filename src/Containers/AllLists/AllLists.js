import React, {Component} from 'react';
import {connect} from 'react-redux';

import ListContainer from '../ListContainer/ListContainer';
import AddList from '../../Components/AddList/AddList';

import {addList} from '../../redux-planning/actions';
import './AllLists.css';

const sampleLists= [
    'List1',
    'List2'
];

class Lists extends Component {

    
    render(){
        return (
            <div className="all-lists">
                {this.props.lists.map((list)=>{return <ListContainer key={list} title={list}/>})}
                <AddList/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})
const mapDispatchToProps = dispatch => ({
    addList: title => dispatch(addList(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(Lists);