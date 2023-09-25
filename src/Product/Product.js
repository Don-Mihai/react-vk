 import './Product.scss';
 
 const Product = ({product}) => {

    return(
        <div className="product-card">
        <img src={product.image} alt={''} className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    )
}

export default Product
