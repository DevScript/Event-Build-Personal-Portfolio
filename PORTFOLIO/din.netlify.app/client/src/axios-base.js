import axios from "axios";

const instance = axios.create({
    baseURL: "https://portfolio-525a9.firebaseio.com/"
});

export default instance;


