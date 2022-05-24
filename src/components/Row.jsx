import React,{useEffect, useState} from "react";
import instance from "../axios";
import classes from './Row.module.css'
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row(props){

    const [movies,setMovies] = useState([]);
    const {title,fetchUrl} = props;
    
    useEffect(()=>{
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(movies);
    return (
        <div className={classes.row}>
            <h2>{props.title}</h2>

            <div className={classes.row_posters}>
                {movies.map(movie =>(
                    <img key={movie.id} className={classes.row_poster} src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
};

export default Row;
