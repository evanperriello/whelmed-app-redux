import React from 'react';
import './Main.css';

import AllLists from '../../Containers/AllLists/AllLists';

const Main = (props)=>{
    return (
        <main className="main-section">
            <AllLists/>
        </main>
    );
}

export default Main;