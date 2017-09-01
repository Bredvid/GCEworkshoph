var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');
const util = require('util');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var tasks = {
    tasks: [
        {id: 1, task: 'Dette er task 1', done: false},
        {id: 2, task: 'Dette er task 2', done: false},
        {id: 3, task: 'Dette er task 3', done: true}
    ]
};
function getTasks(req, res) {
    res.json(tasks);
}
function getTask(req, res) {
    var index = tasks.tasks.findIndex(function(task){return task.id === parseInt(req.params.taskId)});
    res.json(tasks.tasks[index]);
}

function createTask(req, res) {
    var id = Math.max.apply(Math,tasks.tasks.map(function(o){return o.id;})) + 1;
    var obj = req.body;
    obj.id = id;
    tasks.tasks.push(obj);
    res.json(obj);
}
function updateTask(req, res) {
    var index = tasks.tasks.findIndex(function(task){return task.id === parseInt(req.params.taskId)});
    tasks.tasks[index] = req.body;
    res.json(tasks.tasks[index]);
}

function deleteTask(req, res) {
    var index = tasks.tasks.findIndex(function(task){return task.id === parseInt(req.params.taskId)});
    tasks.tasks.splice(index, 1);
    res.status(200)
}
app.route('/api/tasks/:taskId')
    .get(getTask)
    .put(updateTask)
    .delete(deleteTask);

app.route('/api/tasks')
    .get(getTasks)
    .post(createTask);

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);