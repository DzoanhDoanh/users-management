import axios from "./customize-axios"

const fetchAllUsers = () => {
    return axios.get("users?page=1")
}

export {fetchAllUsers}