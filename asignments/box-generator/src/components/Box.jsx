import React from 'react';

const Box = () => {
    //manage the states
    return (
        <div className="container">
            <form>
                <div className="row">
                    <label htmlFor="color">Color</label>
                    <input type="text" id="color"/>
                    <button type="submit">Add</button>
                </div>
            </form>
            <div className="results">
                resultados
            </div>            
        </div>
    );
}

export default Box;
