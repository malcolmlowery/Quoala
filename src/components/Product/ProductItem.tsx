import './product-item.css';

interface ProductI {
   image: string | undefined
   productName: string
   productDescription: string
   productPrice: string
   productIsLoved: boolean
};

const ProductItem = ({
   image,
   productName,
   productDescription,
   productPrice,
   productIsLoved,
}: ProductI) => {
   return(
      <div className='product-item-container'>
         <img src={image} />
         <div className='product-item-container__body'>
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <h2>${productPrice}</h2>
         </div>
      </div>
   )
};

export default ProductItem;