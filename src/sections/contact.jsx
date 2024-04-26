import {React} from 'react';
import email from '../assets/icons/email.png';
import whatsapp from '../assets/icons/whatsapp.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import {emailAdress, githubUrl, linkedinUrl, wppUrl} from "../util/texts";

import '../styles/App.css';
import {toast, Toaster} from "react-hot-toast";
import {ScrollRef} from "../util/ScrollRef";

const Contact = ({isMobile, handleScroll}) => {

    function openSendEmail() {
        toast("E-mail copiado para a área de transferência!", {style: {fontSize: 18, backgroundColor: '#3B3B3B', color: 'white'}});
    }

    function openUrl(url) {
        window.open(url, '_blank').focus();
    }

    const footer = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1 className='contact-text-info' onClick={() => handleScroll(ScrollRef.Start)}>Início</h1>
            <h1 className='contact-text-info' onClick={() => handleScroll(ScrollRef.About)}>Sobre</h1>
            <h1 className='contact-text-info' onClick={() => handleScroll(ScrollRef.Experience)}>Experiência</h1>
            <h1 className='contact-text-info' onClick={() => handleScroll(ScrollRef.Projects)}>Projetos</h1>
        </div>
    );

    return (
        <div className='contact-page' style={{justifyContent: isMobile ? 'flex-start' : 'center', display: 'flex', flexDirection: 'column', height: isMobile ? '100%' : '100vh'}}>
            <text className='contact-subtitle'>Como fazer</text>
            <text className='contact-title'>Contato</text>
            <div className='contact-box' style={{width: isMobile ? '80%' : '30%'}} onClick={openSendEmail}>
                <img src={email} alt='email' width={50} height={50} style={{marginRight: 20}}/>
                <text className='contact-text' style={{fontSize: isMobile ? 14 : 26}}>{emailAdress}</text>
            </div>
            <div className='contact-box' style={{width: isMobile ? '80%' : '30%'}} onClick={() => openUrl(wppUrl)}>
                <img src={whatsapp} alt='whatsapp' width={50} height={50} style={{marginRight: 20}}/>
                <text className='contact-text' style={{fontSize: isMobile ? 14 : 26}}>Me chame no WhatsApp</text>
            </div>
            <div className='contact-box' style={{width: isMobile ? '80%' : '30%'}} onClick={() => openUrl(linkedinUrl)}>
                <img src={linkedin} alt='linkedin' width={50} height={50} style={{marginRight: 20}}/>
                <text className='contact-text' style={{fontSize: isMobile ? 14 : 26}}>Me adicione no LinkedIn</text>
            </div>
            <div className='contact-box' style={{width: isMobile ? '80%' : '30%'}} onClick={() => openUrl(githubUrl)}>
                <img src={github} alt='github' width={50} height={50} style={{marginRight: 20}}/>
                <text className='contact-text' style={{fontSize: isMobile ? 14 : 26}}>Me siga no GitHub</text>
            </div>

            {footer}

            <text className='contact-copyrigth-text'>
                Copyrigth © {new Date().getFullYear()} William Coelho da Silva
            </text>
            <Toaster/>
        </div>
    );
}

export default Contact;