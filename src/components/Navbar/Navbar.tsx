import { Outlet, Link, useLocation } from 'react-router-dom';
import './navbar.css';
import BackArrowIcon from '../../assets/icons/back-arrow-icon-01.png';
import ProfileImage from '../../assets/images/profile-image-01.jpg';

interface NavbarI {}

const Navbar = ({}: NavbarI) => {
   const routeLocation: any = useLocation();
   let navbarTitle = '';

   switch(routeLocation.pathname) {
      case '/product': {
         navbarTitle = 'Facial Cleanser'
         break;
      }
      default: {
         navbarTitle = 'Quoala'
      }
   }

   return(
      <>
         <header className='app-header'>
            <nav className='navbar'>
               { navbarTitle !== 'Quoala' &&
                  <Link to='/'>
                     <img className='navbar__left-icon' src={BackArrowIcon} />
                  </Link>
               }
               <h1 className='navbar__title'>{navbarTitle}</h1>
               <div className='navbar__right-side'>
                  <img src={ProfileImage} />
               </div>
            </nav>   
         </header>
         <Outlet/>
      </>
   )
};

export default Navbar;