export const BASE_URL = 'https://movies.backend.nomoredomains.rocks';

const checkRes = (res) =>
  res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`)

export function register(name, email, password) {

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkRes)
    .catch(err => console.log(err))
};

export const authorize = (email, password) => {

  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ password, email })
  })
    .then(checkRes)
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
          //`Bearer ${token}`,
    },
  })
    .then(checkRes)
      .then(data => data)
}

