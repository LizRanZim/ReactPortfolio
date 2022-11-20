import React from 'react';

/* // --plump-purple: #52489C;
// --true-blue: #4062BB;
// --maximum-blue-green: #59C3C3;
// --platinum: #ebebeb;
// --fiery-rose: #f45b69; */
// --react-logo-blue: #61dafb */

import '../../styles/Mystyles.css';



const styles = {
    card: {
        margin: 20,
        background: '#61dafb',
        textAlign: 'center',  
    
    },

};

function Card() {
    return (
        <div style={styles.card}>
            <div className='square border border-white border-5'>
                <h4>Project 1</h4>
                <p>This project used x, y, z technologies</p>
            </div>
            <div className='square border border-white border-5'>
                <h4>Project 2</h4>
                <p>This project used x, y, z technologies</p>
            </div>
            <div className='square border border-white border-5'>
                <h4>Project 3</h4>
                <p>This project used x, y, z technologies</p>
            </div>
            <div className='square border border-white border-5'>
                <h4>Project 4</h4>
                <p>This project used x, y, z technologies</p>
            </div>
            <div className='square border border-white border-5'>
                <h4>Project 5</h4>
                <p>This project used x, y, z technologies</p>
            </div>
            <div className='square border border-white border-5'>
                <h4>Project 6</h4>
                <p>This project used x, y, z technologies</p>
            </div>
        </div>


    );
}

export default Card;