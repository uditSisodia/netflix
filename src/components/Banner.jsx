import React , {useEffect, useState} from "react";
import instance from "../axios";
import requests from "../requests"
import classes from './Banner.module.css'
import {FaPlay} from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
const baseUrl = "https://image.tmdb.org/t/p/original/";


function Banner(props) {

  const [movie , setMovie] = useState([]); 
  const {topratedUrl} = props;
  const [showFullDesc, setFullDesc] = useState(false);
  useEffect(()=>{
    async function fetchData(){
      const response=await instance.get(requests.fetchTopRated)
      const topMovieIdx=Math.floor(Math.random()*response.data.results.length -1);
      console.log(response.data.results);
      setMovie(response.data.results[topMovieIdx]);
      return response;
    }
    fetchData();
  },[topratedUrl])
  console.log(movie);

  function truncate(s,n)
  {
    if(showFullDesc==true)
      return s;
    return (s?.length > n ? s.slice(0,n)+"...":s);
  }
  function fullDesc()
  {
      return setFullDesc(true);
  }
  return (
    <header className={classes.banner} style={{color:"white",backgroundSize:"cover",backgroundImage:`url(${baseUrl}${movie.poster_path})`,backgroundPosition:"center center"}}>
      <div className={classes.banner_contents}>
        <h2>{movie.title}</h2>
        <div className={classes.banner_title}>
          <button className={classes.banner_button}><FaPlay />  Play</button>
          <button style={{backgroundColor: "#D3D3D3",}} className={classes.banner_button} ><BsInfoCircle />More info</button>
        </div>
        <div className={classes.banner_description}>
          <p>{truncate(movie.overview,250)}</p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
