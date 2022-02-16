import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://teamairprojectthree.herokuapp.com/',
    headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
  })

  