//FilteredList, muestra los resultados coincidentes apartir del input con el arreglo de palabras de Wrapper

//import React from 'react';

/* const FilteredList = ({wordList}) => (
    wordList.map((items, index) => (<p key={index}>{items}</p>))
) */
    //const {wrapperItems} = props;
    //const {wordList, inputWord} = props;
    //console.log(wordList);

import React from 'react';

const FilteredList = (props) => {
    const {wordList, inputWord} = props;
    
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
        })
    );
}

export default FilteredList;
