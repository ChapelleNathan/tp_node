fetch('/api/users/:id/tasks')
    .then(response =>{
        console.log(response);
    })
    .catch(error => {
        throw new Error(error)
    })