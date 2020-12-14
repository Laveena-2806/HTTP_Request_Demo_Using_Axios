// Performing Get request in HTTP and handling the responses in cmd using Axios which is Promise-based HTTP client library.

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });