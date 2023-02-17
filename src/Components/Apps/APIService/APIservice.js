import axios from 'axios';


//To add User file

export const addFile=(data)=>{
    return axios.post(`http://127.0.0.1:8000/pro/user/`,data,{headers:{'content-type':'multipart/form-data'}});
}