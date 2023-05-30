function submitData(nameString, emailString) {
    const data = {
        name: nameString,
        email: emailString
    }
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data)
    }
    
    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(response => {
            const id = document.createElement('p')
            id.textContent = response.id
            document.querySelector('body').appendChild(id)
        })
        .catch(error => {
            const failedFetch = document.createElement('p')
            failedFetch.textContent = error.message
            document.querySelector('body').appendChild(failedFetch)
        })
}

