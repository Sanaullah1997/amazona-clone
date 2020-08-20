import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import formatCurrency from '../util';
import './ProductScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {

    const [qty, setQty] = useState(1);

    console.log(props.match.params.id);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //cleanup
        }
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }

    return (
        <div className="details">
            <div className="back-to-home"><Link to="/">Back to Home</Link></div>
            {loading ? <div>Loading...</div> :
                error ? <div>{error}</div> :
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
                                    <li>State: {product.countInStock > 0 ? "In Stock" : "Out of Stock "}</li>
                                    <li>Qty:
                            <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                            {[...Array(product.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                    </li>
                                    <li>{product.countInStock > 0 && <button onClick={handleAddToCart}>Add to Cart</button>}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default ProductScreen;
