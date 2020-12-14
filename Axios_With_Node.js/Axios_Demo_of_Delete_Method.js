// Performing Delete request in HTTP and handling the responses in cmd using Axios which is Promise-based HTTP client library.

const axios = require('axios').default;

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });