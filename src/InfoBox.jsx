
import "./InfoBox.css"
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({Info}){

const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMGhlYXZ5fGVufDB8fDB8fHww";
const COLD_URL="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyfGVufDB8fDB8fHww";
const HOT_URL="https://images.unsplash.com/photo-1615066037299-7fd7fe32686b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox"> 
          
            <div className="cardContainer">
            

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity>80?RAIN_URL:(Info.temp>15 ?HOT_URL:COLD_URL )}
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city} {Info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:(Info.temp>15 ?<WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon> )}
        </Typography>
        <Typography variant="body2" component={"div"} sx={{ color: 'text.secondary' }}>
        <p>Temperature={Info.temp}&deg;C
        </p>
            <p>Humidity={Info.humidity}</p>
            <p>Min Temp={Info.tempMin}&deg;C</p>
            <p>Max Temp={Info.tempMax}&deg;C</p>
            <p>The weather can be described <i>{Info.weather} </i>feels like {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      
  

        </div>


        </div>
    )
}