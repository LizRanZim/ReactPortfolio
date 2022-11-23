import React from 'react';

/* // --plump-purple: #52489C;
// --true-blue: #4062BB;
// --maximum-blue-green: #59C3C3;
// --platinum: #ebebeb;
// --fiery-rose: #f45b69; */
// --react-logo-blue: #61dafb */

import '../../styles/Mystyles.css';



const styles = {
    // put this in my styles css
    project: {
        margin: 20,
        background: '#61dafb',
        textAlign: 'center',
        className: 'square border border-white border-5'

    },

};

function Project(props) {
    return (
        <div style={styles.project}>
            <h4>{props.name}</h4>
            <img alt={props.name} src={props.img} />
            <p>{props.description}</p>
        </div>
    );
}

export default Project;