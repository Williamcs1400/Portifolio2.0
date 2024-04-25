import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import me from '../assets/me.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import { Button } from '@mui/material';
import '../styles/App.css';
import cv from '../assets/SkillsAndAbilities.pdf';
import {wppUrl} from "../util/texts";

const Home = ({isMobile}) => {
    const [open, setOpen] = useState(false);

    // urls to redirect
    const linkedinUrl = 'https://linkedin.com/in/william-coelho-b27521239';
    const githubUrl = 'https://github.com/Williamcs1400';

    function openUrlInNewTab(url) {
        window.open(url, '_blank').focus();
    }

    function openCV() {
        window.open(cv);
    }

    return (
        <div className='home-page' style={{ flexDirection: isMobile ? 'column' : 'row' }}>
            <img src={me} alt='me' width={300} height={300} style={{ borderRadius: '50%', boxShadow: '10px 10px 10px 0px #DDDDDD', marginInline: 50 }} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginInline: 50, marginTop: isMobile ? 50 : 0 }}>
                <a style={{ fontWeight: '400', fontSize: 16, color: '#626262' }}>Olá, eu sou</a>
                <a style={{ fontWeight: '600', fontSize: 36 }}>William Coelho</a>
                <a style={{ fontWeight: '400', fontSize: 30, color: '#626262' }}>Desenvolvedor Full Stack</a>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <Button
                        variant='outlined'
                        style={{
                            marginRight: 20,
                            textTransform: 'none',
                            color: '#3B3B3B',
                            border: '2px solid #3B3B3B',
                            borderRadius: 20,
                            fontSize: 24
                        }}
                        onClick={openCV}
                    >
                        Currículo
                    </Button>
                    <Button
                        variant='contained'
                        style={{
                            textTransform: 'none',
                            color: 'white',
                            backgroundColor: '#3B3B3B',
                            borderRadius: 20,
                            fontSize: 24
                        }}
                        onClick={() => openUrlInNewTab(wppUrl)}
                    >
                        Fale Comigo
                    </Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                    <img src={github} alt='github' width={40} height={40} className='home-icon' onClick={() => openUrlInNewTab(githubUrl)} />
                    <img src={linkedin} alt='linkedin' width={40} height={40} className='home-icon' onClick={() => openUrlInNewTab(linkedinUrl)} />
                </div>
            </div>
        </div>
    );
}

export default Home;