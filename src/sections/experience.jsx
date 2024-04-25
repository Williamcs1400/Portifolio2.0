import {React, useEffect, useState} from 'react';
import '../styles/App.css';

const Experience = ({isMobile}) => {
    // const [isMobile, setIsMobile] = useState(false);

    console.log(isMobile);



    return (
        <div className='experience-page'>
            <text className='experience-subtitle'>Em quais tecnologias eu possuo</text>
            <text className='experience-title'>Experiência</text>
        </div>
    );
}

export default Experience;