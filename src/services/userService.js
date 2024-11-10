import axios from "./customize-axios"

const fetchAllUsers = (page) => {
    return axios.get(`users?page=${page}`)
}

const postUser = (firstname, lastname, email) => {
    return axios.post("users", {firstname: firstname, lastname: lastname, email: email})
}
export {fetchAllUsers, postUser}