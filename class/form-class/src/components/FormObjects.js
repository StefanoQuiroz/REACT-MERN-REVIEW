import React, { useState } from 'react';

const FormObjects = () => {

    const [state,setState] = useState({
        userName:"",
        email: "",
        password:""
    }) 

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //Esta funcion, mienttras estemos en un campo por ejemplo user el spread ...state mantiene todo lo que esta escrito
        //[name] : value, lo que hace es que cuando estemos en un input especifico, permita insertar el valor de
        /* ex: 
        [name]: value => userName: "Nombre"
        [name]: value => email: "nombre@gmail.com"
        [name]: value => password: "nombre123"
        
        */
        setState({
            ...state,
            [name]:value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const {userName, email, password} = state;
        console.log({userName, email, password});
    }

    //Podemos usar destructuracion para evitar el uso en value state.userName y al mostrar en onSubmit
    //const {userName, email, password} = state;

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <label htmlFor="name">Username: </label>
                {/* name es un atributo en html, es el id para la base de datos, es el campo ex: userName: " "
                value toma el valor de userName, se accede a el objeto state y al key userName ex: state.userName */}
                <input type="text" id="name" name="userName" value={state.userName} onChange={onChange}/> 
            </div>
            <div className="row">
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" name="email" value={state.email} onChange={onChange}/>
            </div>
            <div className="row">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={state.password} onChange={onChange}/>
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default FormObjects;
