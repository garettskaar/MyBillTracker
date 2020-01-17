import React from 'react';
import '../style/App.css';
import { NavBar, Login, TrackingLists } from './Export.js'
import { HamburgerButton } from 'react-hamburger-button';

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleNav: false,
            validLogin: false,
            currentLocation: 'Login',
            user: null
        };
        this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState({
            visibleNav: !this.state.visibleNav
        });
    }
    handleNavButtonClick(event) {
        if(event.target.value === 'Logout'){
            this.setState({
                validLogin: false,
                currentLocation: event.target.value,
                visibleNav: false
            });
        }else{
            this.setState({
                currentLocation: event.target.value,
                visibleNav: false
            });
        }
    }
    render(){
        const login = this.state.validLogin;
        const location = this.state.currentLocation;
        const isVisible = this.state.visibleNav;
        let navClass = "box-app nav-canvas-hidden";
        let mainClass = "box-app main-visible";
        if(isVisible){
            navClass = "box-app nav-canvas-visible";
            mainClass = "box-app main-hidden";
        }
        return(
            <div className="box app">
                <div className="container-app">
                    <div className={navClass}>
                        <NavBar isLoggedIn={login} handleNavButtonClick={this.handleNavButtonClick} />
                    </div>
                    <div className="box-app nav-toggle">
                        <HamburgerButton open={isVisible} onClick={this.handleToggle} />
                    </div>
                    <div className={mainClass}>
                        <Navigate login={login} location={location} />
                    </div>
                </div>
            </div>
        );
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