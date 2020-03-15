import axios from 'axios';

export const addreqApi = async data => {
  let res = await axios.post(`http://localhost:5000/add`, data);
  console.log(res);
  return res;
}