import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Header">
                    <h1 className="Header-title" onClick={this.props.showTable}>Mirror Fingerprint</h1>
                    <div className="Header-buttons">
                        <span className="Header-button" onClick={this.props.showAbout}>About</span>
                        <a className="Header-button github" href="https://github.com/dantelyon/MirrorFP" rel="noreferrer noopener" target="_blank">Github</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header