import { Link } from 'react-router-dom';
import './product-item.css';

interface ProductI {
   image: string | undefined
   productName: string
   productDescription: string
   productPrice: string | number
   productIsLoved: boolean
   routePath: string
   routeState: any
};

const ProductItem = ({
   image,
   productName,
   productDescription,
   productPrice,
   productIsLoved,
   routePath,
   routeState
}: ProductI) => {
   return(
      <div className='product-item-container'>
         <img src={image} />
         <Link to={routePath} state={routeState}>
            <div className='product-item-container__body'>
               <h1>{productName}</h1>
               <p>{productDescription}</p>
               <h2>${productPrice}</h2>
            </div>
         </Link>
      </div>
   )
};

export default ProductItem;