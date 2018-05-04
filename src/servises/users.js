import { rest } from './rest'

export const login = (data = {}) => rest.post('public/login', data);

export const logOut = () => rest.get('logout');

export const checkUser = () => rest.get('public/checkUser');

export const createUser = (firstname, lastname, email, password) => rest.post('public/user', { firstname, lastname, email, password });



// export const login = (data = {}) =>
//   fetch('http://localhost:8081/public/login', {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-type': 'application/json; charset=utf-8'
//     },
//     body: JSON.stringify(data)
//   })
//     .then(res => res.json());

// export const checkUser = () =>
//   fetch('http://localhost:8081/public/checkUser', {
//     method: 'GET',
//     credentials: 'include'
//   })
//     .then(data => data.json());