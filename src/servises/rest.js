const BASE_URL = 'http://localhost:8081'

export const request = (url, method= 'GET', body, options) =>
  fetch(`${BASE_URL}${url}`, {
    method: method,
    credentials: 'include',
    body: JSON.stringify(body)
   
  })
    .then(data => data.json());