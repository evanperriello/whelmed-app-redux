import React from 'react';
import './Main.css';

import AllLists from '../../Containers/AllLists/AllLists';
import ToggleShow from '../../Containers/ToggleShow/ToggleShow';

const Main = (props)=>{
    return (
        <main className="main-section">
            <ToggleShow/>
            <AllLists/>
        </main>
    );
}

export default Main;