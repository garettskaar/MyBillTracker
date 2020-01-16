import React from 'react';
import '../style/App.css';
import { HamburgerButton } from 'react-hamburger-button';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };   
        this.handleClick = this.handleClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(event){
        this.setState(state => ({
            visible: !state.visible
        }));
        // var nav = document.querySelector('nav');
        // nav.classList.toggle('visible');
    }
    handleClick(event){
        this.props.handleNavButtonClick(event);
    }
    render(){
        const loggedIn = this.props.loggedIn;
        const visible = this.state.visible;
        
        if(loggedIn){
            return(
                <div>
                    <div className="nav-toggle">
                        <HamburgerButton open={visible} onClick={this.handleToggle} />
                    </div>
                    <nav>
                        <ul className="nav_ul">
                            <li><button className="nav_item" value="Tracking Lists" onClick={this.handleClick}>{new Date().getFullYear()} Session</button></li>
                            <li><button className="nav_item" value="User Manual" onClick={this.handleClick}>User Manual</button></li>
                            <li><button className="nav_item" value="Change Password" onClick={this.handleClick}>Change Password</button></li>
                            <li><button className="nav_item" value="Logout" onClick={this.handleClick}>Log out</button></li>
                        </ul>
                    </nav>
                </div>
            );
        } else{
            return(
                <div>
                    <div className="nav-toggle">
                        <HamburgerButton open={visible} onClick={this.handleToggle} />
                    </div>
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
}

export default NavBar;