import axios from 'axios'

const categoriesUrl = 'https://api.chucknorris.io/jokes/categories'

export const fetchCategories = async () => {
  return axios.get(categoriesUrl)
}

