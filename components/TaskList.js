import React, {Component} from 'react';
import {render} from 'react-dom';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class TaskList extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let taskListNodes = this.props.data.map(
            (task) => {
                return (
                    <Task title={task.title} body={task.body} />
                );
            }
        );
        return (
            <div className="taskList">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>タイトル</TableHeaderColumn>
                            <TableHeaderColumn>本文</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {taskListNodes}
                    </TableBody>
                </Table>

            </div>

        );
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
}

TaskList.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

class Task extends Component {
    render() {
        return (
            <TableRow>
                <TableRowColumn>{this.props.title}</TableRowColumn>
                <TableRowColumn>{this.props.body}</TableRowColumn>
            </TableRow>
        );
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

}

Task.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default TaskList;