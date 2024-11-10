import axios from "./customize-axios"

const fetchAllUsers = (page) => {
    return axios.get(`users?page=${page}`)
}

export {fetchAllUsers}