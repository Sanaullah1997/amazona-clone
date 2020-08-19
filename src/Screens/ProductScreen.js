import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
//import formatCurrency from '../util';
import './ProductScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const productDetails = useSelector( state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className="details">
            <div className="back-to-home"><Link to="/">Back to Home</Link></div>
            { loading ? <div>Loading...</div>:
                error ? <div>{error}</div>:
                (
                    <div className="Product">
                <div className="Product_image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="Product_info">
                    <ul>
                        <li><h3>{product.name}</h3></li>
                        <li>{product.rating} Stars ({product.numReview} Reviews)</li>
                        <li>Price:<b>${product.price}</b></li>
                        <li>Description: <div>{product.description}</div></li>
                    </ul>
                </div>
                <div className="Product_action">
                    <ul>
                        <li>Price:<b> ${product.price}</b></li>
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
                )
            }
            
        </div>
    )
}

export default ProductScreen;
