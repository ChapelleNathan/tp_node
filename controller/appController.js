const { resolve } = require('path');

exports.homeController = ((request, response) => {
    response.sendFile(resolve('public', 'home.html'));
})