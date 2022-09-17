import React from 'react';
import FilterIcon from '../../assets/icons/filter-icon-01.png';
import './button.css';

interface ButtonI {
   style: React.CSSProperties,
   type?: 'icon' | 'text' | 'icon-with-text'
   text?: string,
}

const Button = ({ style, text, type }: ButtonI) => {
   const renderBtnType = () => {
      switch(type) {
         case 'icon': return (
            <button className={`btn-${type}`} style={style}>
               <img src={FilterIcon} />
            </button>
         )
         case 'text': return (
            <button className={`btn-${type}`}>
               <p>{text}</p>
            </button>
         )
         case 'icon-with-text': return (
            <button className={`btn-${type}`}>
               <p>Icon goes here...</p>
               <p>{text}</p>
            </button>
         )
         default: return(
            <button className={`btn-${type}`}>
               <p>{text}</p>
            </button>
         )
      }
   };

   return(
      renderBtnType()
   )
};

export default Button;