//FilteredList, muestra los resultados coincidentes apartir del input con el arreglo de palabras de App.js

//import React from 'react';

/* const FilteredList = ({wordList}) => wordList.map((items, index) => (<p key={index}>{items}</p>)
) */
    //const {wrapperItems} = props;
    //const {wordList, inputWord} = props;
    //console.log(wordList);

import React from 'react';

const FilteredList = (props) => {
    const {wordList, inputWord} = props;
    //["something", "sombrero", "sombra", "tesla"]
    //s
    return (
        wordList.map((item, index) => {
            const inicio = item.indexOf(inputWord);
            const final = inicio + inputWord.length;
            return (
                <p key={index}>
                    {item.slice(0,inicio)}
                    <b>{item.slice(inicio, final)}</b>
                    {item.slice(final)}
                </p>
            )
            //"" -s-omething
            //som -t- hing
            // someth -ing-
        })
    );
}

export default FilteredList;
