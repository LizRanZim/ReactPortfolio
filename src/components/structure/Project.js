import React from 'react';
/* // --plump-purple: #52489C;
//  --react-logo-blue: #61dafb */
import githubImg from '../../img/github.svg';
import '../../styles/Mystyles.css';



const styles = {
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
            <h4>{props.name} <a href={props.githubURL} target="_blank" rel="noreferrer">
                <img src={githubImg} alt="GitHub Icon" />
            </a>
            </h4>
            <img alt={props.name} src={props.img} width="300px" />
            <p>{props.description}</p>
        </div>
    );
}

export default Project;