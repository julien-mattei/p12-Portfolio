import './style.css'
import picture from '../../../public/image/julien-mattei.webp'

function AboutMe () {
    return <div className='about-me'>
        <h2 id="about-me">About me</h2>
        <div className='about-me-content'>
            <div className='about-me-pic'>
                <img className='' src={picture} alt="Julien Matteï picture" />
            </div>
            <div className='about-me-description'>
                <h3>Développeur FrontEnd débutant</h3>
                Après une découverte du développement web durant mon master Document électronique et flux d'information, 
                j'ai décidé de m'orienter vers le web en faisant une formation afin d'acquérir plus de connaissance dans le domaine.<br/>
                Je suis passionné par le langage web en terme de linguistique pour pouvoir construire une application web.<br/>
                Je suis également passioné par le jeu vidéo et la création de contenu. <br/>
                <h4>Formation suivie:</h4>  <a href="https://openclassrooms.com/fr/paths/900-integrateur-web">Intégrateur Web </a> chez  
                OpenClassroom
                
            </div>
        </div>
    </div>
}

export default AboutMe