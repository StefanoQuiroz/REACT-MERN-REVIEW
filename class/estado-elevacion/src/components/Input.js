//Componente Input crearemos una especia de formulario con un label y un input, que tenga una variable que se inicie en "" y luego actualice dicha variable
import React from 'react';

const Input = (props) => {
    const {palabraInicial, setPalabraInicial} = props
    return (
        <form>
            <label htmlFor="word">Filter</label>
            <br />
            <input type="text" id="word" value={palabraInicial} onChange={e=>setPalabraInicial(e.target.value)}/>
            {/* value = valor inicial, toma a bariable palabraInicial
            onChange se usa para cambiar el input y actualizar el value con el setPalabraInicial
            e.target obtiene una referencia, apunta a algo, en este caso value, pero puede ser un form, un name, etc. */} 
        </form>
        
    );
}

export default Input;
