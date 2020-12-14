// Performing Put request in HTTP and handling the responses in cmd using Axios which is Promise-based HTTP client library.
const axios = require('axios').default;

const updatedPost = {
    id: 1,
    userId: 1,
    title: 'A new title',
    body: 'Update this post'
};

axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedPost)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.error(err);
    });