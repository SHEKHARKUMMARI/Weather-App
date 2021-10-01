import React ,{useState} from "react";

import { GET_WEATHER_QUERY } from "../graphql/Queries";
import {useLazyQuery} from '@apollo/client';

function Home(){
    const [city,setCity]=useState("");
    const[getWeather,{data,loading,error}]=useLazyQuery(GET_WEATHER_QUERY,{
        variables:{name: city},
    })
    if(loading)
    return <h1>loading...</h1>
    if(error)
    return <h1>error:{error.message}</h1>
    if(data){
    console.log(data);
    }
    return <div className="home">
        <h1>Search for Weather</h1>
        <input type="text" placeholder="city name" onChange={(e)=>{setCity(e.target.value)}}></input>
        <button onClick={()=>getWeather()}>Search</button>
        <div className='weather'>
            {
                data && (
                <>
                <h2>cityname:{data.getCityByName.name}</h2>
                <h2>temperature:{data.getCityByName.weather.temperature.actual}</h2>
                <h2>wind :{data.getCityByName.weather.wind.speed}</h2>
                <h2>description : {data.getCityByName.weather.summary.description}</h2>
            </>)
            }
        </div>
         </div>
}
export default Home