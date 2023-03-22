import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => {
      return response.data
  })
}

const create = (postObject) => {
  return axios
    .post(baseUrl, postObject)
    .then(response => {
      return response.data
  })
}

const remove = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => {
      return response.data
    })
}

const update = (id, updateObject) => {
  return axios
    .put(`${baseUrl}/${id}`, updateObject)
    .then(response => {
      return response.data
    })
}

const exportObject = {
  getAll,
  create,
  remove,
  update
}

export default exportObject