import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = 'f33a484cf794d08d0148764789aaba32';

export const fetchWhether=async(query)=>{

    const {data}= await axios.get(URL,{
       params:{
            q:query,
            units:'metric',
            APPID:API_Key
       }

    })
    return data;

}