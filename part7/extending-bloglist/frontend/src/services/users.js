import axios from 'axios'

const baseUrl = '/api/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const findById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const userService = { getAll, findById }

export default userService
