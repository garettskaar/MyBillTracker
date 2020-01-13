import React from 'react';
import '../style/App.css';

class Footer extends React.Component {
    render(){
        return(
            <div className="app-footer">
                <p>Legislative Services Office | P.O. Box 83720 | Boise, ID | 83720-0054</p>
                <p>208/334-2475 | FAX 208/334-2125</p>
                <p>Maintained by lsoweb@lso.idaho.gov</p>
                <p>{new Date().getFullYear()} Idaho Legislature</p>
            </div>
        );
    }
}

export default Footer;