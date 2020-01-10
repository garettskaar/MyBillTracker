import React from 'react';
import '../style/App.css';
import { SealIcon } from './Export.js'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false                  
        };    
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return(
            <div className="navbar">
                <SealIcon width={100} />
                <nav>
                    <ul className="nav_ul">
                        <li><button className="nav_item" value="Login" onClick={this.handleClick}>Login</button></li>
                        <li><button className="nav_item" value="User Manual" onClick={this.handleClick}>User Manual</button></li>
                        <li><button className="nav_item" value="Create Account" onClick={this.handleClick}>Create Account</button></li>
                        <li><button className="nav_item" value="Forgot Password" onClick={this.handleClick}>Forgot Password</button></li>
                    </ul>
                </nav>
            </div>
        );
    }                  
}