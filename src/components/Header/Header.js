import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { images } from '../../constants';
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
          // <img src={images.logo01} alt="profile_bg" />
        ) : (
            <img className='header__logo' src={images.logo01} alt="profile_bg" />
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
