let data = {
    name: "Rohan",
    gender: "Male",
    email: "Ro***********@gmail.com",
    status: "Active"
};

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer bdd45e03df7e15563711a08dd8e83c7e743f8eef07121a31e4d77535b3212a4b"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        console.log(jsonData);

    });
    
    
    
  let data = {
    name: "Rohan Dasari",
    gender: "Male",
    email: "Ro***********@gmail.com",
    status: "Active"
};

let options = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer bdd45e03df7e15563711a08dd8e83c7e743f8eef07121a31e4d77535b3212a4b"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users/1359", options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        console.log(jsonData);

    });
    
    
  let data = {
    name: "Rohan",
    gender: "Male",
    email: "Ro***********@gmail.com",
    status: "Active"
};

let options = {
    method: "GET",
};
fetch("https://gorest.co.in/public-api/users/1407", options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        console.log(jsonData);

    })
    
    let data = {
    name: "Rohan",
    gender: "Male",
    email: "Ro***********@gmail.com",
    status: "Active"
};

let options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer bdd45e03df7e15563711a08dd8e83c7e743f8eef07121a31e4d77535b3212a4b"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users/1407", options)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonData) {
        console.log(jsonData);

    });