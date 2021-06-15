import React from 'react';

import styles from '../button/MyButton.module.css';

const Button = () => {
    return (
        <div>
            <button className={styles.myButton} onClick={()=>alert("You click me!!")}>Boton</button>
        </div>
    );
}

export default Button;
