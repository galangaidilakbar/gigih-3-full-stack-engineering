import axios from 'axios';

// Simulating promise success
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        response.data.forEach(({title}, index) => {
            index++;
            console.log(index, title)
        });
    })
    .catch(error => {
        console.log(error);
    });

// This code will be executed first, even though it is written after the promise.
console.log('I am the first one to be executed, Not you Promise! 😜');

// Simulating promise error
// axios.get('https://httpstat.us/404')
//     .then(response => {
//         // this block will not be executed
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// Simulating async/await success
// async function getTodos() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//
//         response.data.forEach(({title}, index) => {
//             index++;
//             console.log(index, title)
//         });
//
//         // this code will be executed after the promise resolved
//         console.log('I am the last one to be executed')
//     } catch (error) {
//         console.log(error);
//     }
// }

// Simulating async/await error
// async function getTodos() {
//     try {
//         const response = await axios.get('https://httpstat.us/500');
//         // this block will not be executed
//         response.data.forEach(({title}, index) => {
//             index++;
//             console.log(index, title)
//         });
//     } catch (error) {
//         console.log(error.message);
//     }
// }
//
// getTodos();