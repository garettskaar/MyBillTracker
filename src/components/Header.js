import React from 'react';
import '../style/App.css';


class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Idaho State Legislature</h1>
                <a href="http://legislature.idaho.gov/">Home</a>
                <a href="http://www.idaho.gov/">State of Idaho</a>
            </div>
            
        );
    }
}
export default Header;