import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import "./CartScreen.css";
import { Link } from 'react-router-dom';

function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;    
    const dispatch = useDispatch();

    const removeFromCartHandler = (productId) =>{
        dispatch(removeFromCart(productId));
    }

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping");
    }

    return (
        <div className="cart">
           <div className="cart-list">
           <ul className="cart-list-container">
           <li>
           <div className="cart-shopping">Shopping Cart</div>
           <div>Price</div>
           </li>
           {
               cartItems == 0 ?
               <div>Cart is Empty!!</div>
               :
               cartItems.map( item =>
                <li>
                <div className="cart-image"> 
                <img src={item.image} alt="product" /></div>
                <div className="cart-name">
                <div className="cart-name-link"><Link to={"/product/" + item.product}>{item.name}</Link> </div>
                <div> Qty: 
                <select value={item.qty} onChange={e => dispatch(addToCart(item.product, e.target.value))}>
                {[...Array(item.countInStock).keys()].map(x =>
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                )}
                </select>
                <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                </div>
                </div>
                <div className="cart-price"><b>${item.price}</b></div>
                </li>
                )
           }
           </ul>
           </div>
           <div className="cart-action">
           <h3>
            Subtotal ( {cartItems.reduce((a, c) => a+c.qty, 0)} items)
            :
            $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
           </h3>
           <button onClick={checkoutHandler} className="button full-width" disabled={cartItems.length == 0}> Proceed to Checkout</button>
           </div>
        </div>
    )
}

export default CartScreen;
