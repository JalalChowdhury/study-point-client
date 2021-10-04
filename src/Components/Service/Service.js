
import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { service, image, price, rating, duration } = props.service;
    // console.log(props);
    const history = useHistory();
    const handleClick = () => {
        history.push('/successful');
    }
    const addCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="course col">
            <div className="card h-100">


                <img className="card-img img-fluid" src={image} alt="" />

                <div className="card-body">
                    <h2 className="salmon-color">{service}</h2>
                    <h6>Duration : {duration} h</h6>
                    <Rating
                         initialRating={rating}
                         emptySymbol="far fa-star icon-color"
                         fullSymbol="fas fa-star icon-color"
                         readonly

                    />
                    <h5>৳ {price}</h5>
                    <button onClick={handleClick} className="add-btn mt-2">{addCartIcon} Enroll Now</button>
                    


                </div>


            </div>

        </div>
    );
};

export default Service;