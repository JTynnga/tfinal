'use client';
import { useEffect, useState } from 'react';
import SideBar from "../../components/SideBar"
import Image from 'next/image'
import Tempo800 from "../../public/clear.png"
import Tempo500 from "../../public/lightRain.png"
import Tempo801 from "../../public/LightCloud.png"
import Tempo802 from "../../public/LightCloud.png"
import Tempo803 from "../../public/shower.png"
import Tempo804 from "../../public/HeavyCloud.png"

function LocationIcon() {
  return (
      <svg 
      xmlns="htpp://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
      fill="white"
      >
      <path 
      d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0-90Z"/>
      </svg>
  )
}
  function LocationIcon1() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="48"
      viewBox="0 -960 960 960"
      width="48"
      fill="white"
      >
      <path
       d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
      </svg>   )
}
function filterData() {
console.log(data[2].dt_txt);
const arrFiltered=[];

data.forEach((current) =>{
  const txt  = current.dt_txt;
  const dayForecast = parseInt(txt.substring(8,10));
  const hourForecast = parseInt(txt.substring(11,13));
  console.log(txt);
  const today = new Date().getDate();
  if (dayForecast != today && hourForecast == 12) {
    arrFiltered.push(current);
  }
});
console.log(arrFiltered);
return arrFiltered;
}

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [current, setCurrent] = useState();
  const [city, setCity]       = useState("alaska");
  const fecha = new Date();
  const sfecha=fecha.toUTCString().substring(0,11);
 
  const getData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=d323781c890e05ada5473bfcddef87b9&units=metric`);
    
    if (res.ok == true) {
       const data = await res.json();
       setCurrent(data);
      }
   };

useEffect(() =>{
  getData();
}, [city]);

//console.log(current);  

function handleSideBar() {
     setSideBar(!sideBar);
}

return (
  <main id="container">
  <section id="currentWeather">
        {current &&  (
     <>
      <div id="navBar-btns">
        <button id="btnSearch" onClick={handleSideBar}>Search for places</button>
        <button id="btnLocation">
                  <LocationIcon />
        </button> 
      </div>
      <div id="navBar-img">
      <Image
        src={Tempo803}
        alt="Weather"
      />
      </div>
      <div id="navBar-data">
           <p>
          <span>{Math.ceil(current.list[2].main.temp)}</span>°C
           </p>
           <p>Shower</p>
           <p>
                 <span>Today</span>
                 <span>.</span>
                 <span>{sfecha}</span>
           </p>
           <p>
             <span><LocationIcon1 /></span>
             <span>{current.city.name}</span>
           </p>
        </div>
          
     </>
     )}
     </section>
      <section id="forecast">
        <div id="fore-btns">
            <button id="btnC" >°C</button>
            <button id="btnF" >°F</button>
        </div>
        <div id="forecast1">
          <div id= "forecastCards" >
                <p>Tomorrow</p>
                <div id="navBar-img">
                   <Image
                   src={Tempo500}
                   alt="Weather"
                   width="120"
                   height="120"                   
                   />
                </div>
                <div id="foreTemp">
                  <p><span>20</span>°C</p>
                  <p><span>19</span>°C</p>
                </div>
          </div>

          <div id= "forecastCards" >
                <p>{sfecha}</p>
                <div id="navBar-img">
                   <Image
                   src={Tempo803}
                   alt="Weather"
                   width="120"
                   height="120"                   
                   />
                </div>
                <div id="foreTemp">
                  <p><span>21</span>°C</p>
                  <p><span>20</span>°C</p>
                </div>
          </div>
          <div id= "forecastCards" >
                <p>{sfecha}</p>
                <div id="navBar-img">
                   <Image
                   src={Tempo804}
                   alt="Weather"
                   width="120"
                   height="120"                   
                   />
                </div>
                <div id="foreTemp">
                  <p><span>22</span>°C</p>
                  <p><span>21</span>°C</p>
                </div>
          </div>
          <div id= "forecastCards" >
                <p>{sfecha}</p>
                <div id="navBar-img">
                   <Image
                   src={Tempo802}
                   alt="Weather"
                   width="120"
                   height="120"                   
                   />
                </div>
                <div id="foreTemp">
                  <p><span>20</span>°C</p>
                  <p><span>19</span>°C</p>
                </div>
          </div>
          <div id= "forecastCards" >
                <p>{sfecha}</p>
                <div id="navBar-img">
                   <Image
                   src={Tempo800}
                   alt="Weather"
                   width="120"
                   height="120"                   
                   />
                </div>
                <div id="foreTemp">
                  <p><span>20</span>°C</p>
                  <p><span>19</span>°C</p>
                </div>
          </div>
 
        </div>
        <div id="hightlights">
        <div id="hight1">
          <div id= "hightCards" >
                <p>Wind Status</p>
                <p>
                  <span>{Math.ceil(current.list[2].wind.speed)}</span>kmh
                </p>
                <div id="foreTemp">
                  <p><span>X</span></p>
                  <p><span>wsw</span></p>
                </div>
          </div>
          <div id= "hightCards" >
                <p>Humidity</p>
                <p>
                  <span>{Math.ceil(current.list[2].main.humidity)}</span>%
                </p>
                <div id="foreTemp">
                  <p><span>X</span></p>
                  <p><span>wsw</span></p>
                </div>
                </div> 
       </div>
       <div id="hight2">
          <div id= "hightCards" >
                <p>Visibility</p>
                <p>
                  <span>{Math.ceil(current.list[2].visibility)}</span>km
                </p>
                <div id="foreTemp">
                  <p><span>X</span></p>
                  <p><span>wsw</span></p>
                </div>
          </div>
          <div id= "hightCards" >
                <p>Air pressure</p>
                <p>
                  <span>{Math.ceil(current.list[2].main.pressure)}</span>mb
                </p>
                <div id="foreTemp">
                  <p><span>X</span></p>
                  <p><span>wsw</span></p>
                </div>
          </div>

          </div>
        </div>
      </section>

    </main>
  )
}
