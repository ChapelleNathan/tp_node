const { users } = require('../db/users.json');
const { tasks } = require('../db/tasks.json');

exports.getAllUsersController = ((request, response) => {
    response.json(users);
})

exports.getOneUserByIdController = ((request, response) => {
    const userId = request.params.id;
    let user = users.find(user => user.id == userId)
    user ? response.json(user) : response.status(404).end();
})

exports.getUserTasks = ((request, response) => {
    const userId = request.params.id;
    let user = users.find(user => user.id == userId)
    let userTasks = [];
    tasks.forEach(task => {
        if (task.userId == userId) {
            userTasks.push(task);
        }
    });
    user ? 
        response.json({
            user,
            tasks: userTasks
        }) :
        response.status(404).end();
})