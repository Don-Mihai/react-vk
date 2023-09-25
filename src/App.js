import Product from "./Product/Product.js";
import Friend from './components/Friend';
import Friends from './modules/Friends';
import './App.scss';

function App() {
    const products = [
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 19.99,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 2000,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
        {
            title: 'Пример товара',
            description: 'Описание товара здесь',
            price: 10000,
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ca1a938-5d5b-4c3b-b342-72a1a32e1c10/air-force-1-lover-xx-womens-shoes-j4B5P5.png',
        },
    ];

    return (
        <div>
            {/* <div className="products">
                {products.map(product => {
                    return <Product product={product} />;
                })}
            </div> */}

            <Friends />
            
        </div>
    );
}

export default App;
