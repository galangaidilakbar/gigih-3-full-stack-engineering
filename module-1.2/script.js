import axios from 'axios';

// Simulate handling promise success
// axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         response.data.forEach(({title}, index) => {
//             index++;
//             console.log(index, title)
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });

// Simulate handling promise error
// axios.get('https://httpstat.us/404')
//     .then(response => {
//         //
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// Simulate handling async/await success
// async function getTodos() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         response.data.forEach(({title}, index) => {
//             index++;
//             console.log(index, title)
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// Simulate handling async/await error
// async function getTodos() {
//     try {
//         const response = await axios.get('https://httpstat.us/500');
//         response.data.forEach(({title}, index) => {
//             index++;
//             console.log(index, title)
//         });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

getTodos();