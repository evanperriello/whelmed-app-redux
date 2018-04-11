import React, {Component} from 'react';

import ListContainer from '../ListContainer/ListContainer';
import AddList from '../../Components/AddList/AddList';
import './AllLists.css';

const sampleLists= [
    'List1',
    'List2'
];

class Lists extends Component {

    
    render(){
        return (
            <div className="all-lists">
                {sampleLists.map((list)=>{return <ListContainer key={list} title={list}/>})}
                <AddList/>
            </div>
        );
    }
}

export default Lists;