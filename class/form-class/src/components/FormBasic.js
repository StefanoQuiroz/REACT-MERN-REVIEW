import React, { useState } from 'react';

const FormBasic = (props) => {
    //(3) En paralelo con el value y el onChange se crean los states
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //(4) creamos la funcion onSubmit cada vez que el usuario haga click en el botón Send, se enviara la informacion de los inputs a la consola en un objeto (empaquetado)

    const onSubmit = (event) => {
        //(5) colocamos event.preventDefault() para evitar que React haga un refresh de la página y no entre este en un blucle
        event.preventDefault();
        //(6) empquetamos los states en un objeto
        const data = {userName, email, password};
        //(7) Mostramos los datos atraves de un objeto ex: {userName:"juan", email: "juan@gmail.com", password: "123" }
        console.log(data);
        //(8) Estos sets permiten reiniciar el formulario a cadena vacía, mejor dicho limpian el forumlario cuando el usuario hace click en send, para permitir crear un nuevo usuario
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
        //(1) creamos el formulario con el tag form, dentro de ele los labels e inputs
        //(2) Asignamos una variable inicial a value, y la funcion que actualizará/cambiará set... a través de la función onChange={}, esta función actualizará el value
        <form onSubmit={onSubmit}>
            <div className="row">
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" value={userName} onChange={(event) => setUserName(event.target.value) }/>
            </div>
            <div className="row">
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div className="row">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default FormBasic;
