import axios from "axios";

const api = axios.create({ baseURL : 'https://casashowdesafioapi.herokuapp.com/'});

export default api;