import React from 'react';
import '../style/App.css';
import { CreateNewListForm, List } from './Export.js';

class TrackingLists extends React.Component {
    render(){
        return(
            <div>
                <CreateNewListForm />
                <div>
                    <table>
                        <tr>
                            <th>List Name</th>
                            <th>Add/Remove Bills</th>
                            <th>Copy From Existing</th>
                            <th>Delete</th>
                            <th>Print</th>
                        </tr>
                        {/* <tr>
                            <List />
                        </tr> */}
                    </table>
                </div>
            </div>
        ); 
    }
}

export default TrackingLists;