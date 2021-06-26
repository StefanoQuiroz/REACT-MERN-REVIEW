//La idea es dar mensajes mientras el usuario completa el formulario para decirle si esta colocando los datos correctamente.
import React, { useState } from 'react';

const ManejoValidaciones = () => {
    const [movieTitle, setMovieTitle] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    
    const onChange = (event) => {
        const value= event.target.value;
        setMovieTitle(value);
        if(value.length < 1){
            setError("Title is required!");
        }else if (value.length < 3) {
            setError("Title must be 3 characters or longer!");
        } else{
            setError("");
        }
        setSubmitted(true);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({movieTitle});
    }

    return (
        <form onSubmit={onSubmit}>
            {
                (submitted) ? <h3>You create a new movie title!</h3> : ''
            }
            <div>
                <label htmlFor="movies">Movie Title: </label>
                <input type="text" id="movies" value={movieTitle} onChange={onChange}/>
                {
                    (error) ? <p style={{color:"red", fontWeight:"bold"}}>{error}</p> : ''
                }
            </div>
            <input type="submit" value="Create Movie"/>
            
        </form>
    );
}

export default ManejoValidaciones;
