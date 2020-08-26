import React from 'react';
import TextField from '@material-ui/core/TextField';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    <TextField 
                        id="filled-basic" 
                        label="Text" 
                        variant="filled"
                        value = {this.props.text}
                        margin="normal"
                        onChange={this.handleChangeChange}
                    /> 
                </td>
                <td>
                <TextField 
                        id="filled-basic" 
                        label="Priority" 
                        variant="filled"
                        value = {this.props.priority}
                        margin="normal"
                        onChange={this.handleChangeChange}
                    /> 
                </td>
                <td>
                <TextField 
                        id="filled-basic" 
                        label="DueDate" 
                        variant="filled"
                        value = {String(this.props.dueDate.format('DD-MM-YYYY'))}
                        margin="normal"
                        onChange={this.handleChangeChange}
                    /> 
                    
                </td>
            </tr>
        );
    }

}