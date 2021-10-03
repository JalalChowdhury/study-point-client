import React from 'react';
import './Cart.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {

    const { cart } = props;
    
    const total = cart.reduce((previous,course) => previous + course.fee,0);
    // const buyIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div class="cart">
            <h3 className="salmon-color">Free Enrolled View</h3>
            <h5>Course Enrolled Number : {props.cart.length}</h5>
            <h5>Total : ৳ {total}</h5>
            

            <ol>
                {
                   
                    cart.map(course => <li><b>{course.title}</b> <br/> <small>Cost : ৳ {course.fee}</small> </li>)
                }
            </ol>
            
            <button className="buy-btn"> Enroll Now</button>
        </div>
    );
};

export default Cart;