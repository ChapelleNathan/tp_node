const { users } = require('../db/users.json');
const { tasks } = require('../db/tasks.json');
const { writeFileSync } = require('fs');
const { response } = require('../app');
const { randomUUID } = require('crypto');
const { resolve } = require('path');


exports.updateTaskController = ((request, response) => {
    let userId = request.params.userId
    let taskId = request.params.taskId;
    let task = findTask(taskId);
    task.isDone ? task.isDone = false : task.isDone = true;
    updateJSON();
    response.end();
})

exports.deleteTaskController = ((request, response) => {
    let taskId = request.params.id
    for (let task of tasks) {
        if (task.id == taskId) {
            tasks.splice(task.id,1);
        }
    }
    updateJSON();
    response.end();
})

exports.apiCreateTaskController = ((request, response) => {
    const userId = request.params.id;
    const newTask = {
        id: randomUUID(),
        userId,
        content: request.body.content,
        isDone: false,
        isUrgent: request.body.isUrgent,
    }
    tasks.push(newTask);
    updateJSON();
    response.end();
})

function updateJSON() {
    writeFileSync(
        resolve('db', 'tasks.json'),
        JSON.stringify({ tasks }, null, 2)
    );
}

function findTask(taskId) {
    return tasks.find(task => taskId == task.id);
}