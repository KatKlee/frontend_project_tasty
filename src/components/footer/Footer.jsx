import instagram from './img/instagram.svg';
import youtube from './img/youtube.svg';
import facebook from './img/facebook.svg';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='socialMedia'>
            <a href="www.instagram.com" target="_blank"><img src={instagram} alt="instagramlogo" /></a>
            <a href="www.youtube.com" target="_blank"><img src={youtube} alt="youtubelogo" /></a>
            <a href="www.facebook.com" target="_blank"><img src={facebook} alt="facebooklogo" /></a>
        </footer>
    )
}

export default Footer