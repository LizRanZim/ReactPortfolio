import React from 'react';

/* // --plump-purple: #52489C;
// --true-blue: #4062BB;
// --maximum-blue-green: #59C3C3;
// --platinum: #ebebeb;
// --fiery-rose: #f45b69; */
// --react-logo-blue: #61dafb */

import '../../styles/Mystyles.css';



const styles = {
    project: {
        margin: 20,
        background: '#61dafb',
        textAlign: 'center',

    },

};

function Project(props) {
    return (
        <div style={styles} className='square border border-white border-5'>
            <img alt={props.name} src={props.img} />
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default Project;