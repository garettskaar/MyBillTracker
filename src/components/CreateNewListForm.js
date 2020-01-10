import React from 'react';
import '../style/App.css';

class CreateNewListForm extends React.Component {
    
    render(){
        return (
            <div>
                <form>
                    <h4>Create a New Tracking List</h4>
                    <input placeholder="New Track List Name" type="text"/>
                    <button onClick={this.handleClick}>
                        Add List
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateNewListForm;