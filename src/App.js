import React,{useState} from 'react'
import {fetchWhether} from './api/fetchWhether'
import './App.css'
const App=()=>{
    const [query,setQuery]=useState('')
    const [whether,setWhether]=useState({})

    const search=async(e)=>{
        if(e.key=== 'Enter'){
            const data=await fetchWhether(query)
            console.log(data)
            setWhether(data)
            setQuery('')
        }
    }
    return (
        <div className='main-container'>
            
            <input
                type='text'
                className='search'
                placeholder='Search..'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                onKeyPress={search}
            ></input>
            {whether.main && (
                <div className='city'>
                    <h2 className='city-name'>
                            <span>{whether.name}</span>
                            <sup>{whether.sys.country}</sup>

                        </h2>
                        <div className='city-temp'>
                            {whether.main.temp}
                            <sup>&deg;C</sup>
                        </div>
                        <div className='info'>
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${whether.weather[0].icon}@2x.png`} alt={whether.weather[0].description} />
                        <p>{whether.weather[0].description}</p>
                        </div>
                </div>


            )}

        </div>
    )
    
}
export default App;