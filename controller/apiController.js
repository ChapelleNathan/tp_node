const { users } = require('../db/users.json');
const { tasks } = require('../db/tasks.json');

exports.getAllUsersController = ((request, response) => {
    response.json(users);
})

exports.getOneUserByIdController = ((request, response) => {
    const userId = request.params.id;
    user = users.find(user => user.id == userId)
    user ? response.json(user) : response.status(404).end();
})