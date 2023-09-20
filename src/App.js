import Product from "./Product.js";


function App() {

  const products = [
    {name: 'test1', price: 1000},
    {name: 'test2', price: 1000},
    {name: 'test3', price: 1000},
    {name: 'test4', price: 1000},
    {name: 'test5', price: 1000},
  ]

  
  return (
    <div>
      {
        products.map((product) => {
          return <Product name={product.name} price={product.price} />
        })
      }
      
    </div>
  );
}

export default App;
