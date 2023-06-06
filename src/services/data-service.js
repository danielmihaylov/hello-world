// const API_URL = 'http://localhost:8080/api/data'
const API_URL ='https://api.punkapi.com/v2/beers'

export const getAll = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => {
      throw error
    })
}
