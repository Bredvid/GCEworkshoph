import React, {Component} from 'react';
import update from 'immutability-helper';

import './Todos.css';
import Task from './Todo'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    loadTodos() {
        fetch('/api/tasks')
            .then((response) => response.json())
            .then((tasks) => this.setState(tasks))

    }

    markDone = (updateid) => {
        let index = this.state.tasks.findIndex(({id}) => id === updateid);
        let isDone = !this.state.tasks[index].done;
        let newState = update(this.state, {
            tasks: {
                [index]: {
                    done: {$set: isDone}
                }
            }
        });
        const task = newState.tasks[index];
        fetch(`/api/tasks/${updateid}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        });
        this.setState(newState);
    };
    deleteTask = (deleteid) => {
        let index = this.state.tasks.findIndex(({id}) => id === deleteid);
        let newState = update(this.state, {
            tasks: {$splice: [[index, 1]]}
        });
        const task = newState.tasks[index];
        fetch(`/api/tasks/${deleteid}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        });
        this.setState(newState);
    };
    addTask = () => {
        const task = {id: 0, task: this.state.input, done: false};

        fetch(`/api/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        }).then((res) => res.json())
            .then((res) => {
                console.log(res);
                let newState = update(this.state, {
                    tasks: {$push: [res]}
                });
                this.setState(newState);
            });
    };
    changeInput = (e) => {
        let newState = update(this.state, {input: {$set: e.target.value}});
        this.setState(newState);
    };

    getInitialState() {
        return {
            tasks: []
        };
    }

    componentDidMount() {
        this.loadTodos();
    }

    render() {
        const {tasks}= this.state;
        const tasksMapped = tasks.map(function (task) {
            return <Task task={task} markDone={this.markDone} delete={this.deleteTask}/>
        }, this);
        return (
            <div className="Todos">
                <ul >
                    { tasksMapped  }
                </ul>
                <div className="TodosInput">
                    <input type="text" onChange={this.changeInput}/>
                    <input type="button" value="Legg til" onClick={this.addTask}/>
                </div>
            </div>
        );
    }
}

export default Todos;
