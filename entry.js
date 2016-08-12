import React, {Component} from 'react';
import {render} from 'react-dom';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MyAppBar from './components/MyAppBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.onPostTask = this.onPostTask.bind(this);
    }

    render() {
        return (
            <div className="hoge">
                <MyAppBar />
                <TaskForm onPostTask={this.onPostTask} />
                <TaskList data={this.state.data} />
            </div>

        );
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

    onPostTask(json) {
        let data = this.state.data;
        data.push(json);
        this.setState({data: data});
    }

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

render(
    <App />,
    document.getElementById("content")
);