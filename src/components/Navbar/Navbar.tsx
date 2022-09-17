import { Outlet } from 'react-router-dom';
import './navbar.css';
import BackArrowIcon from '../../assets/icons/back-arrow-icon-01.png';
import ProfileImage from '../../assets/images/profile-image-01.jpg';

interface NavbarI {}

const Navbar = ({}: NavbarI) => {
   return(
      <header>
         <nav className='navbar'>
            <img className='navbar__left-icon' src={BackArrowIcon} />
            <h1 className='navbar__title'>Search Product</h1>
            <div className='navbar__right-side'>
               <img src={ProfileImage} />
            </div>
         </nav>   
         <Outlet/>
      </header>
   )
};

export default Navbar;