import axios from 'axios'

const categoriesUrl = 'https://api.chucknorris.io/jokes/categories'
const randomCategoryUrl = 'https://api.chucknorris.io/jokes/random?category='
const searchUrl = 'https://api.chucknorris.io/jokes/search?query='
const randomJokeUrl = 'https://api.chucknorris.io/jokes/random'

export const fetchCategories = async () => {
  return axios.get(categoriesUrl)
}

export const fetchRandomCategoryJoke = async (category: string) => {
  const url = randomCategoryUrl + category
  return axios.get(url)
}

export const fetchSearchJokes = async (search: string) => {
  const url = searchUrl + search
  return axios.get(url)
}

export const fetchRandomJoke = async () => {
  return axios.get(randomJokeUrl)
}
