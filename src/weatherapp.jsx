import Searchbox from "./search box";
import Infobox from "./infobox";
import './new.css';

import { useState } from "react";

export default function Weatherapp(){
    const [weatherinfo, setweatherinfo] = useState({
        city:"vadodara",
        feelslike: 24.45,
        temp: 23.78,
        tempmin: 25.04,
        tempmax: 29.25,
        humidity:47,
        weather: "haze",
        wind:"2"
    });


    let updateinfo = (newinfo)=>{
        setweatherinfo(newinfo);
    }

    // return (
    //     <div className="">
    //         <h2>weather app by mee</h2>
    //         <Searchbox updateinfo={updateinfo}/>
    //         <Infobox info={weatherinfo}/>

    //     </div>

    // );
    return( <div className="container">
            
            <div className="loactionpage">
                <Searchbox updateinfo={updateinfo}/>
                    
            </div>
            <div className="weatherpage">
                
                    <Infobox info={weatherinfo}/>

            </div>
        </div>
    );
    
}