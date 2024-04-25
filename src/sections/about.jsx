import {React} from 'react';
import meabout from '../assets/me-about.jpg';
import education from '../assets/icons/education.png';
import experience from '../assets/icons/experience.png';
import {aboutText} from '../util/texts';
import '../styles/App.css';

const About = ({isMobile}) => {
    const fullstackXP = new Date().getFullYear() - 2021 + 1;
    const mobileXP= new Date().getFullYear() - 2020 + 1;

    return (
        <div className='about-page'
             style={{flexDirection: 'column', justifyContent: isMobile ? 'flex-start' : 'center'}}>
            <text style={{fontWeight: '400', fontSize: 16, color: '#626262'}}>Mais um pouco</text>
            <text style={{fontWeight: '600', fontSize: 36}}>Sobre mim</text>
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: isMobile ? '100%' : '60%',
                maxWidth: isMobile ? '100%' : '90%',
                marginTop: isMobile ? 0 : 150
            }}>
                <img src={meabout} alt='me' width={300} height={300}
                     style={{borderRadius: '10%', boxShadow: '10px 10px 10px 0px #DDDDDD', marginInline: 50}}/>
                <div style={{
                    marginTop: isMobile ? 10 : 0,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isMobile ? 'center' : 'left',
                    flexWrap: 'wrap'
                }}>
                    <div className="about-box" style={{maxWidth: isMobile ? '200px' : "50%"}}>
                        <img src={education} alt='education' width={35} height={35}/>
                        <text className="about-box-title">Educação</text>
                        <text className="about-box-content">Formado em Ciência da Computação pela Universidade de
                            Brasília (UnB) em 2023
                        </text>
                    </div>
                    <div className="about-box">
                        <img src={experience} alt='experience' width={35} height={35}/>
                        <text className="about-box-title">Experiência</text>
                        <text className="about-box-content">+{fullstackXP} anos Dev Full Stack</text>
                        <text className="about-box-content">+{mobileXP} anos Dev Mobile</text>
                    </div>
                    <text className="about-text">{aboutText}</text>
                </div>
            </div>
        </div>
    );
}

export default About;