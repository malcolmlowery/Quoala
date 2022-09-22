import { Link, useNavigate } from 'react-router-dom';
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ProductItem from "../components/Product/ProductItem";
import productsData from '../services/product-data.json';
import './home.css';

const Home = () => {
   const navigate = useNavigate();
   
   return(
      <div className="home">
         <section className="home__header">
            <Input width={500} />
            <Button style={{ marginLeft: 20 }} type="icon" />
         </section>

         <section className="home__products">
            <div className="home__products__title">
               <h1>Found </h1>
               <h1>10 Results</h1>
            </div>
            <div className="home__products__items">
              {productsData.products.map(product => {
               console.log(product.productDescription)
               return(
                  <ProductItem 
                     key={product.id}
                     image={product.image}
                     productName={product.productName}
                     productDescription={product.productDescription}
                     productPrice={product.productPrice}
                     productIsLoved={false}
                     routePath={'/product'}
                     routeState={{
                        image: product.image,
                        productName: product.productName,
                        productDescription: product.productDescription,
                        productPrice: product.productPrice,

                     }}
                  />
               )
              })}
            </div>
         </section>
      </div>
   )
};

export default Home;