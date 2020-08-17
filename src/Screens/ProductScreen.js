import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';
import formatCurrency from '../util';
import './ProductScreen.css';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id == props.match.params.id);
    return (
        <div className="details">
            <div className="back-to-home"><Link to="/">Back to Home</Link></div>
            <div className="Product">
                <div className="Product_image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="Product_info">
                    <ul>
                        <li><h3>{product.name}</h3></li>
                        <li>{product.rating} Stars ({product.numReview} Reviews)</li>
                        <li>Price:<b> {formatCurrency(product.price)}</b></li>
                        <li>Description: <div>{product.description}</div></li>
                    </ul>
                </div>
                <div className="Product_action">
                    <ul>
                        <li>Price:<b> {formatCurrency(product.price)}</b></li>
                        <li>State: {product.status}</li>
                        <li>Qty:
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li><button>Add to Cart</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;
