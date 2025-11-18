
import './Header.css';
import { Link } from 'react-router-dom';
import Moon from '../../assets/MoonWithStars.png';
import Star from '../../assets/Star.png';
function Header() {


  return (

    <div className='header'>
      <div>
        <img src={Moon} id='moon' />
      </div>

      <div>
        <div className='nav-items'>
          <Link to="/" className='nav-links'>Hem</Link>
          <Link to="/projects" className='nav-links'>Projekt</Link>
          <Link to="/projects" className='nav-links'>Om mig</Link>
          <Link to="/contact" className='nav-links'>Kontakt</Link>
          <Link to="/projects" className='nav-links'>CV</Link>
        </div>
        <img src={Star} id='star' />
      </div>
    </div>
  )
}

export default Header