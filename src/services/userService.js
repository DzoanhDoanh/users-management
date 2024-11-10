import axios from "./customize-axios"

const fetchAllUsers = (page) => {
    return axios.get(`users?page=${page}`)
}

const postUser = (firstName, lastName, email) => {
    return axios.post("users", {firstname: firstName, lastname: lastName, email: email})
}

const updateUser = (firstName, lastName, email) => {
    return axios.put("users/", {first_name: firstName, last_name: lastName, email: email})

}
export {fetchAllUsers, postUser, updateUser}