import { React, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import me from '../assets/me.png';
import { Button } from '@mui/material';
import '../styles/App.css';
import cv from '../assets/SkillsAndAbilities.pdf';


const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    const messageText = 'Oi, William, entrei no seu portfólio e gostaria de conversar com você!';
    const url = 'whatsapp://send?text=' + messageText + '&phone=+5561993578834';

    // listener to check if the window is resized (mobile or desktop)
    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function openWppInNewTab() {
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
                        onClick={openWppInNewTab}
                    >
                        Fale Comigo
                    </Button>

                </div>
            </div>
        </div>
    );
}

export default Home;