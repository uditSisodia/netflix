import React,{useEffect, useState} from "react";
import instance from "../axios";
import classes from './Row.module.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row(props){

    const [movies,setMovies] = useState([]);
    const {title,fetchUrl,isLargeRow} = props;
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            //console.log(request);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    },[fetchUrl]);
    const opts ={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    //console.log(movies);
    
    return (
        <div className={classes.row}>
            <h2>{title}</h2>
            <div className={classes.row_posters}>
                {movies.map(movie =>(
                    <img onClick={()=>{if(trailerUrl!=""){setTrailerUrl("")} else{movieTrailer(movie.name || "").then(url =>{const urlParams =new URLSearchParams( new URL(url).search); setTrailerUrl( urlParams.get('v')); }).catch(error => console.log("404 not found"))}}} key={movie.id} className={!isLargeRow? classes.row_poster : classes.row_posterLarge} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl!="" && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
};

export default Row;
