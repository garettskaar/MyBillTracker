import React from 'react';
import '../style/App.css';
import { ReactComponent as Seal } from '../graphics/idaho_seal.svg';

class Header extends React.Component {
    render(){
        return(
            <div className="box header">
                <header>
                    <div className="container-header">
                        <div className="box-header seal">
                            <Seal />
                        </div>
                        <div className="box-header title">
                            <h1>Idaho State Legislature</h1>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;