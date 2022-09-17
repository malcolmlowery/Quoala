import './input.css';
import SearchIcon from '../../assets/icons/search-icon-01.png';

interface InputI {
   width?: number
}

const Input = ({ width }: InputI) => {
   return(
      <div className='input-container' style={{ maxWidth: width }}>
         <img src={SearchIcon} />
         <input placeholder='Cleansers' type='text' />
      </div>
   )
};

export default Input;