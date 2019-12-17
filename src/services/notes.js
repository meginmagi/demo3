import axios from 'axios';

const baseUrl = 'http://localhost:3002/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = testNote => {
    const request = axios.post(baseUrl, testNote)
    return request.then(response => response.data)
}



const update = (id, updatedNote) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNote)
    return request.then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove
}