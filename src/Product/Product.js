 import './Product.scss';
 
 const Product = (props) => {

    return(
        <div className='product'>
            <h2>{props.name}</h2>
            <p className="product-description">{props.price}</p>
            <button type='submit'>Купить</button>
        </div>
    )
}

export default Product
