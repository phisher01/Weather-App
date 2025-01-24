
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    
    const [weatherInfo,setWeatherInfo]=useState({
        temp: 22.05, city:"Delhi" ,weather:"haze", tempMin: 22.05, tempMax: 22.05, humidity: 33, feelsLike: 21.17,
    });

    let UpdateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (



        <div style={{textAlign:"center"}}> 
           <h1 style={{fontFamily: "Raleway",color:"#e0f7fa"}}>Live Weather Telecast</h1>
            <SearchBox  UpdateInfo={UpdateInfo}  />


        <InfoBox Info={weatherInfo} > </InfoBox>
            
        </div>
    )
}