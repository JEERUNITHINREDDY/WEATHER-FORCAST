import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Time from './time';

import './new.css';


import { useState } from 'react';
// import Clock from './clock';

export default function Searchbox({updateinfo}) {
    let [city, setcity]=useState("");
    let [error, seterror]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dea9bc3af36c8d0aa387beb3974e05f7";
    

    let getweatherinfo = async () => {
        try {
            let response=await fetch(`${API_URL}?q=${city}&units=Metric&appid=${API_KEY}`);
        let jsonresponse = await response.json();
        console.log(jsonresponse);

        let result = {
            city:city,
            temp: jsonresponse.main.temp,
            tempmin: jsonresponse.main.temp_min,
            tempmax: jsonresponse.main.temp_max,
            humidity: jsonresponse.main.humidity,
            feelslike: jsonresponse.main.feels_like,
            weather: jsonresponse.weather[0].description,
            wind: jsonresponse.wind.speed,

        }
        console.log(result);
        return result;

        }catch (err){
            throw(err);
            
        }
        
    };
    let handlechange = (event) => {
        setcity(event.target.value);
    };

    let handlesubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
            let newinfo = await getweatherinfo();
            updateinfo(newinfo);
        }catch(err){
            seterror(true)
        }
        
    };

    return (
        <div className='searchbox'>
            <h3>Search any City</h3>

            
            <form onSubmit={handlesubmit}>
            <TextField 
                className='textfieldcol'
                id="outlined-basic" 
                label="City Name" 
                required 
                value={city} 
                onChange={handlechange}
            />
            <br /> <br />
            <Button 
                 
                type='Submit' 
                className='button'

            >Search<SearchIcon/></Button>
           
            {error && <p style={{color: "red"}}>No such place exists!</p> }

            </form>
            <div className='clock'>
                <Time/>
            </div>
            
        </div>
    ) ;
}
