import React from 'react';
import '../style/App.css';
import { SealIcon, Login, TrackingLists } from './Export.js'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validLogin: false,
            currentLocation: 'Login',
            user: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        if(event.target.value === 'Logout'){
            this.setState({
                validLogin: false,
                currentLocation: event.target.value
            });
        }else{
            this.setState({
                currentLocation: event.target.value
            });
        }
    }
    render(){
        const login = this.state.validLogin;
        const location = this.state.currentLocation;
        if(login){
            //USER is logged in
            return(
                <div>
                    <div className="navbar">
                        <SealIcon width={100} />
                        <nav>
                            <ul className="nav_ul">
                                <li><button className="nav_item" value="Tracking Lists" onClick={this.handleClick}>{new Date().getFullYear()} Session</button></li>
                                <li><button className="nav_item" value="User Manual" onClick={this.handleClick}>User Manual</button></li>
                                <li><button className="nav_item" value="Change Password" onClick={this.handleClick}>Change Password</button></li>
                                <li><button className="nav_item" value="Logout" onClick={this.handleClick}>Log out</button></li>
                            </ul>
                        </nav>
                    </div>
                    <Navigate login={login} location={location} />
                </div>
            ); 
        }else{
            //USER is logged out
            return(
                <div>
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
                    <Navigate login={login} location={location} />
                </div>
            );
        }
    }
}
function Navigate(props) {
    const goTo = props.location;
    if(goTo === 'Login'){
        return(
            <Login />
        );
    } else if(goTo === 'Tracking Lists'){
        return(
            <TrackingLists />
        );
    } else if(goTo === 'User Manual'){
        return(
            <p>USER MANUAL</p>
        );
    } else if(goTo === 'Create Account'){
        return(
            <p>CREATE ACCOUNT</p>
        );
    } else if(goTo === 'Forgot Password'){
        return(
            <p>FORGOT PASSWORD</p>
        );
    } else if(goTo === 'Change Password'){
        return(
            <p>CHANGE PASSWORD</p>
        );
    } else{
        return(
            <p>ERROR</p>
        );
    }
}

export default Navigator;