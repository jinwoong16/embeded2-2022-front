import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URI;
console.log(baseUrl)

export const onoff = () => axios.get(baseUrl+"/onoff");
export const refresh = () => axios.get(baseUrl+"/refresh");