import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import ProductItem from "../components/Product/ProductItem";
import './home.css';

const Home = () => {
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
               <ProductItem 
                  image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/glossier-milkyjelly-1512575988.jpg'
                  productName='Facial Cleanser'
                  productDescription='Citrus refreshes senses'
                  productPrice='14.99'
                  productIsLoved={false}
               />
               <ProductItem 
                  image='https://media1.popsugar-assets.com/files/thumbor/ysqOFGx4Now5ni3J3OTQoSEKfWc/0x61:1600x1661/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/09/01/002/n/1922153/edfadd405f4ed348df0cc9.90548788_/i/best-skincare-products-september-2020.jpg'
                  productName='Splash Mountain'
                  productDescription='Exfoliating Scrubs'
                  productPrice='24.89'
                  productIsLoved={false}
               />
               <ProductItem 
                  image='https://cdn.shopify.com/s/files/1/0508/2611/7313/products/Untitleddesign-6_600x.png?v=1626381081'
                  productName='Classic Cleanser'
                  productDescription='Grapefruit Cane'
                  productPrice='19.99'
                  productIsLoved={false}
               />
               <ProductItem 
                  image='https://assets.teenvogue.com/photos/5d14a4994b98130009ffd31e/master/w_1586,h_1983,c_limit/teen-vogue-acne-awards-2019-035.jpg'
                  productName='Differin Oil'
                  productDescription='Absorbing Moisturizer with SPF'
                  productPrice='32.99'
                  productIsLoved={false}
               />
               <ProductItem 
                  image='https://cdn.shopify.com/s/files/1/0508/2611/7313/products/Untitleddesign-15_5000x.png?v=1626381962'
                  productName='Miracle Mask'
                  productDescription='Natural Peel Mask'
                  productPrice='24.99'
                  productIsLoved={false}
               />
            </div>
         </section>
      </div>
   )
};

export default Home;