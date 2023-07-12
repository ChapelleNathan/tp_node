const { resolve } = require('path');

exports.homeController = ((request, response) => {
    response.sendFile(resolve('public', 'html','home.html'));
})

exports.userController = ((request, response) => {
    response.end();
    response.sendFile(resolve('public', 'html','userTasks.html'));
})