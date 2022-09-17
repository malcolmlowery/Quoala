import './product-details.css';
import StarGrayIcon from '../assets/icons/star-gray-01.png';
import LeafIcon01 from '../assets/icons/leaf-icon-01.png';
import LeafIcon02 from '../assets/icons/leaf-icon-02.png';
import EarthIcon01 from '../assets/icons/earth-icon-01.png';
import Button from '../components/Button/Button';

const ProductDetails = () => {
   return(
      <div className='product-details'>
         <div className='product-details__image-container'>
            <img src='https://cdn.shopify.com/s/files/1/0508/2611/7313/products/Untitleddesign-6_600x.png?v=1626381081' />
         </div>

         <div className='product-details__ingredients'>
            <div className='product-details__ingredients__card'>
               <img src={LeafIcon01} />
               <p>Vegan</p>
            </div>
            <div className='product-details__ingredients__card'>
               <img src={EarthIcon01} />
               <p>Natural</p>
            </div>
            <div className='product-details__ingredients__card'>
               <img src={LeafIcon02} />
               <p>C+ Natural</p>
            </div>
         </div>

         <div className='product-details__card'>
            <div className='product-details__card__top'>
               <div className='product-details__card__top__title'>
                  <h1>Facial Cleanser</h1>
                  <div className='product-details__card__top__rank__stars'>
                     <img src={StarGrayIcon} />
                     <img src={StarGrayIcon} />
                     <img src={StarGrayIcon} />
                     <img src={StarGrayIcon} />
                     <img src={StarGrayIcon} />
                  </div>
               </div>
               <div className='product-details__card__stats'>
                  <p>Size: 7.60 fl oz/225ml</p>
                  <p>(132 Reviews)</p>
               </div>
            </div>
            <div className='product-details__card__bottom'>
               <h1>$9.99</h1>
               <div className='spacer'></div>
               <Button style={{ backgroundColor: '#07060A', borderRadius: 22 }} type='text'>
                  <p className='product-details__card__bottom__btn-text'>Cart</p>
               </Button>
            </div>
         </div>
      </div>
   )
};

export default ProductDetails;