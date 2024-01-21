// import "./App.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infobox({info}) {


    const INIT_URL = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let COLD_URL = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let HOT_URL = "https://images.unsplash.com/photo-1506126383447-1baf4fb3c267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    
    return <div>
        
    <div className="infobox" >


        <div className='cardcontainer'>
                <Card sx={{ Width: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={
                            info.humidity > 80 
                            ? RAIN_URL 
                            : info.temp > 30 
                            ? HOT_URL
                            : COLD_URL
                        }
                    />
        
                </Card>
                <div className='climate'>
                    {info.weather}
            </div>
            </div>
            



    <div className='todayweather'>
        <ul>
        
        <li className="temp">
             Feels Like{"    "} 
             <span className="temp">{info.feelslike}&deg;C</span>
        </li >
        <li className="temp">
            Temp{"  "}
            <span className="temp">{info.temp}&deg;C</span>
        </li>
        <li >
            Temp-Min{"   "} 
            <span className="temp">{info.tempmin}&deg;C</span>
        </li>
        <li className="temp">
            Temp-Max{"  "}
            <span className="temp">{info.tempmax}&deg;C</span>
        </li>
        <li className="temp">
            humidity{"  "} 
            <span className="temp">{info.humidity}%</span>
        </li>
        
        <li className="temp">
            wind{"  "}
             <span className="temp">{info.wind} Kph</span>
        </li>
        </ul>

        </div>
        </div>

        <div className="cityhead">
            {info.city}{
                info.humidity > 80 
                ? <ThunderstormIcon/>
                : info.temp > 30 
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
        </div>
        
    </div>
}