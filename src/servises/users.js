import { request } from './rest'

export const login = (data = {}) => request('/public/login',
  'POST',
  data,
  {
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    }
  }
)

export const checkUser = () => request('/public/checkUser', 'GET')
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