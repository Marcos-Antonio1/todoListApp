import axios from "axios";

const HOST ="http://localhost:3000/"
const Api = axios.create ({
    baseURL: HOST,
})

export default Api;