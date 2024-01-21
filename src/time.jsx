import { useState, useEffect } from "react";
import "./new.css";
import { dividerClasses } from "@mui/material";

export default function Time() {
    const [time, settime] = useState('')


    function formattime(val){
        if(val<10) {
            return "0"
        }else{
            return "";
        }
    }

    useEffect(()=> {
        const timeid = setInterval( () =>
        tick(),1000)

        return function cleanup() {
            clearInterval(timeid)
        }
    })


    function tick() {
        const d = new  Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();

        settime(formattime(h) + h + ':' + formattime(m) + m + ':'+ formattime(s) + s );
    }


    return (
        <div className="clock" >
            <div className="screen" >
                <h2 className="time">{time}</h2>

            </div>
        </div>
    );

}