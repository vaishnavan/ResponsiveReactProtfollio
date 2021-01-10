import React, { Component } from 'react';
import './Toolbar.css';
import { Icon } from 'semantic-ui-react';

class Toolbar extends Component {
    render() {
        return (
            <>
                <header className="toolbar_headerMain">
                    <nav className="toolbar_headerNav">
                        <div className="toolbar__toggle-button">
                            <Icon name="bars" size="large" onClick={this.props.drawerClickHandler} />
                        </div>
                        <div className="toolbar_navLogo">
                            <h3>Vaishnavan M</h3>
                        </div>
                        <div className="toolbar_split" />
                        <div className="toolbar_navItems">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Qualification</li>
                                <li>Skills</li>
                                <li>Projects</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Toolbar;
