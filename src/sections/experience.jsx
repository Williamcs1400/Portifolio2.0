import {React} from 'react';
import '../styles/App.css';
import certificate from '../assets/icons/certificate.png';

const Experience = ({isMobile}) => {

    const subBox = (title, content) => (
        <div className='experience-sub-box'>
            <div style={{width: 'fit-content', marginRight: 10}}>
                <img src={certificate} alt='certificate' width={30} height={30}/>
            </div>
            <div style={{width: '40%', display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                <text className='experience-sub-box-title'>{title}</text>
                <text className='experience-sub-box-content'>{content}</text>
            </div>
        </div>
    );

    return (
        <div className='experience-page' style={{alignContent: isMobile ? 'flex-start' : 'center'}}>
            <text className='experience-subtitle'>Em quais tecnologias eu possuo</text>
            <text className='experience-title'>Experiência</text>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <div className='experience-box'>
                    <text className='experience-box-title'>Frontend</text>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {subBox('HTML', 'Alto')}
                        {subBox('CSS', 'Alto')}
                        {subBox('JavaScript', 'Alto')}
                        {subBox('TypeScript', 'Alto')}
                        {subBox('ReactJS', 'Alto')}
                        {subBox('Java Swing', 'Alto')}
                        {subBox('SASS', 'Básico')}
                    </div>
                </div>
                <div className='experience-box'>
                    <text className='experience-box-title'>Backend</text>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {subBox('Java', 'Alto')}
                        {subBox('Spring', 'Alto')}
                        {subBox('Python', 'Alto')}
                        {subBox('NodeJS', 'Alto')}
                        {subBox('Kotlin', 'Alto')}
                        {subBox('C++', 'Alto')}
                        {subBox('C#', 'Intermediário')}
                    </div>
                </div>
                <div className='experience-box'>
                    <text className='experience-box-title'>Mobile</text>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {subBox('React Native', 'Alto')}
                        {subBox('Android Studio', 'Alto')}
                        {subBox('QT', 'Alto')}
                        {subBox('Flutter', 'Intermediário')}
                        {subBox('.NET', 'Intermediário')}
                    </div>
                </div>
                <div className='experience-box'>
                    <text className='experience-box-title'>Outros</text>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {subBox('Spring', 'Alto')}
                        {subBox('Kafka', 'Médio')}
                        {subBox('Flask', 'Médio')}
                        {subBox('Docker', 'Médio')}
                        {subBox('PostgreSQL', 'Alto')}
                        {subBox('MySQL', 'Alto')}
                        {subBox('MySQL', 'Alto')}
                        {subBox('Firebase', 'Alto')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;