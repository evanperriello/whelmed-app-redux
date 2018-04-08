import React from 'react';
import './AppHeader.css';
import VideoMP4 from '../../img/video.mp4';
import VideoWEBM from '../../img/video.webm';

const AppHeader = (props)=>{
    return (
        <header className="app-header">
            <div className="app-header__video">
                <video className="app-header__video__content" autoPlay muted loop>
                    <source src={VideoMP4} type="video/mp4"/>
                    <source src={VideoWEBM} type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>
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