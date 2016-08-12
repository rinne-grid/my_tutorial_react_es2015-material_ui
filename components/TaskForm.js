import React, {Component} from 'react';
import {render} from 'react-dom';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {taskTitle: "", taskBody: ""};
        this.onRegistButtonClick = this.onRegistButtonClick.bind(this);
        this.onTaskTitleChange = this.onTaskTitleChange.bind(this);
        this.onTaskBodyChange = this.onTaskBodyChange.bind(this);
    }
    render() {
        return (
            <div className="taskList">
                <TextField
                    hintText="タイトル"
                    onChange={this.onTaskTitleChange}
                    ref="taskTitle"
                /><br />
                <TextField
                    hintText="本文"
                    ref="taskBody"
                    multiLine={true}
                    rows={4}
                    floatingLabelText="本文を入力"
                    onChange={this.onTaskBodyChange}
                /><br />
                <RaisedButton
                    label="登録"
                    primary={true}
                    onClick={this.onRegistButtonClick}
                />
            </div>
        );
    }

    onTaskTitleChange(e) {
        e.preventDefault();
        this.setState({taskTitle: e.target.value});
    }

    onTaskBodyChange(e) {
        e.preventDefault();
        this.setState({taskBody: e.target.value});
    }

    onRegistButtonClick(e) {
        let title = this.state.taskTitle;
        let body = this.state.taskBody;
        //let d = new Date();
        //let key = d.getFullYear()+""+(d.getMonth()+1)+""+d.getDate()+""+d.getTime().toString();
        this.props.onPostTask({title: title, body: body});

        this.refs.taskTitle.input.value = "";
        this.refs.taskBody.input.refs.input.value = "";

        this.setState({title: "", body: ""});
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

}

TaskForm.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};


export default TaskForm;