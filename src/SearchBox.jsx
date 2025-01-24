
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({UpdateInfo}){

    let [city,setCity]=useState("");

    let [err,setErr]=useState(false);

    let API_URL=import.meta.env.VITE_API_URL;
    let API_Key=import.meta.env.VITE_API_KEY;


    let getWeatherInfo=async ()=>{
        try{
       let jsonResponse= await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);

       let response=await jsonResponse.json()   ;
      
          let result={
              city:city,
              temp:response.main.temp,
              tempMin:response.main.temp_min,
              tempMax:response.main.temp_max,
        humidity:response.main.humidity,
        feelsLike:response.main.feels_like,
        weather:response.weather[0].description,
        
    };
    
    return result;
}catch(err){
    throw err;
}
    }

    let handleChange=(event)=>{

        setCity(event.target.value);

    }


    let handleSubmit= async(event)=>{
        try{

            event.preventDefault();
            
            setCity("");
            let newInfo=await getWeatherInfo();
            setErr(false);
            UpdateInfo(newInfo);
        }catch(err){
            setErr(true);

        }

    }



    return (<div className="SearchBox">
      
   
    <form onSubmit={handleSubmit}>
    <TextField  sx={{
        backgroundColor: "grey", // Set background color to white
        input: { color: "white" }, // Set text color
      "& .MuiInputLabel-root": {
          color: "black", // Change label color
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "white", // Change label color when focused
        },}}                    id="city" label="City Name" required  value={city} onChange={handleChange}  variant="outlined" />
    <br /> <br />
    <Button  type="submit" variant="contained">Search</Button>
    {err && <p style={{color:"red",fontWeight:800}}>No such place exists! </p>}


 
  </form>
  </div>

    );
}