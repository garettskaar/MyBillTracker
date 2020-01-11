import React from 'react';
import '../style/App.css';
import { NavBar, Login, TrackingLists } from './Export.js'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validLogin: false,
            currentLocation: 'Login',
            user: null
        };
        this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
    }
    handleNavButtonClick(event) {
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
        return(
            <div>
                <NavBar isLoggedIn={login} handleNavButtonClick={this.handleNavButtonClick} />
                <Navigate login={login} location={location} />
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