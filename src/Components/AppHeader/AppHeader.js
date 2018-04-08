import React from 'react';
import './AppHeader.css';

const AppHeader = (props)=>{
    return (
        <header className="app-header">
            <h1 className="app-header__title">
                Whelmed
                <span className="app-header__subtitle">
                    helping get your todos done
                </span>
            </h1>
        
        </header>
    );
}

export default AppHeader;