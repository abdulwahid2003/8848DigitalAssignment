import axios from "axios";
import { Server } from "../../global";

export const validateLogin=async(userName,password)=>{
    return axios.get(`${Server.BASE_URL}assignment.API.access_token.get_access_token?usr=${userName}&pwd=${password}`)
}