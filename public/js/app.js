    fetch('https://localhost:4000/api/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            document.getElementById('users').innerHTML = `
            ${users.map(user => `
                <div id="${user.id}" class="user">
                    <a href="/user/${user.id}/tasks">
                        <h2>${user.name}</h2>
                    </a>
                </div>
            `)}
            `
        })
