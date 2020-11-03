import axios from 'axios'

const categoriesUrl = 'https://api.chucknorris.io/jokes/categories'
const randomCategoryUrl = 'https://api.chucknorris.io/jokes/random?category='

export const fetchCategories = async () => {
  return axios.get(categoriesUrl)
}

export const fetchRandomCategoryJoke = async (category: string) => {
  const url = randomCategoryUrl + category
  return axios.get(url)
}
