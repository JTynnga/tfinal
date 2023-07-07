'use client';
import { useEffect, useState } from 'react';
import SideBar from "../../components/SideBar"

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


export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [current, setCurrent] = useState([]);
  const [city, setCity]       = useState("tarapoto");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=997e57cd6e45963a8dc587afdfdfe6e4&units=metric`);
      const data = await res.json();
      setCurrent(data[0]);
      console.log(data[0]);
 /*   if (res.ok == true) {
        const data = await res.json();
        setCurrent(data.list[0]);
        console.log(data.list[0]);
      }*/
    }
     getData();
  }, [city]
  );
  console.log(current);

  function handleSideBar() {
     setSideBar(!sideBar);
  }
  return (
    <main id="container">
      <section id="currentWeather">
      <div id="navBar-btns">
        <button id="btnSearch" onClick={handleSideBar}>Search for places</button>
        <button id="btnLocation">
                  <LocationIcon />
        </button> 
      </div>
      <div id="navBar-img">
           <img src="clear.png" alt="weather"/>
      </div>
      <div id="navBar-data">
           <p>
           <span>32</span>°C
           </p>
           <p>Shower</p>
           <p>
                 <span>Today </span>
                 <span>.</span>
                 <span>Fri, 7 Jul</span>
           </p>
           <p>
             <span><LocationIcon1 /></span>
             <span>{city}</span>
           </p>
        </div>
       {/*sideBar==true ? (
          <SideBar fun={handleSideBar}/>
       ) : ("")*/}
      </section>
      <section id="forecast"></section> 
    </main>
  )
}
