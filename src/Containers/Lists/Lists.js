import React, {Component} from 'react';

import ListContainer from '../ListContainer/ListContainer';
import './Lists.css';

const sampleLists= [
    'List1',
    'List2'
];

class Lists extends Component {

    
    render(){
        return (
            <div className="all-lists">
                {sampleLists.map((list)=>{return <ListContainer key={list} title={list}/>})}
            </div>
        );
    }
}


export default Lists;