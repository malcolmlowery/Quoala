import './input.css';
import SearchIcon from '../../assets/icons/search-icon-01.png';

const Input = () => {
   return(
      <div className='input-container'>
         <img src={SearchIcon} />
         <input placeholder='Cleansers' type='text' />
      </div>
   )
};

export default Input;