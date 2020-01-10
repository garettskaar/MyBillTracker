import React from 'react';
import '../style/App.css';

class List extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <button>Print List</button>
                    <button>Print List With Notes</button>
                    <button>Add/Remove Bills</button>
                    <button>Copy From Existing</button>
                    <button>My Tracking Lists</button>
                </div>
                <table>
                    <tr>
                        <th>Bill No.</th>
                        <th>Description</th>
                        <th>Last Action</th>
                        <th>Has Note?</th>
                        <th>View/Edit Note</th>
                    </tr>
                </table>
            </div>
        );
    }
}

export default List;