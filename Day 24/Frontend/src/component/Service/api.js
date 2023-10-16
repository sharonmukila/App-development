import axios from "axios";

let jwtToken=localStorage.getItem('Token');
const authheader=`Bearer${jwtToken}`;
console.log(jwtToken);
const headers={
    'Authorization':authheader,
    'Content-Type':'application/json',
};

const URI="http://localhost:3001";

const userregister=(register)=> axios.post(`${URI}/api/v1/auth/register`,register)
const userlogin=(logdata)=> axios.post(`${URI}/api/v1/auth/login`,logdata)
const getUser = () => axios.get(`${URI}/user/get`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })

export{userregister,userlogin,getUser,getUserbyId}