import React from 'react';
import { useHistory } from 'react-router';
import './HomeServiceDetail.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const HomeServiceDetail = (props) => {
    const {service, image ,price , rating,duration} = props.service;
    // console.log(props);

    const history = useHistory();
    const handleClick = () => {
        history.push('/services');
    }


    

    return (
        <div className="col">
            <div className="card-design h-100">

               
                <div >
                      <img className="card-img mx-auto" src={image} alt="" />
                </div>
                
                <div className="card-body">
                    <h2 className="salmon-color">{service}</h2>
                    <h6>Duration : {duration} h</h6>
                    <h5> ৳ {price}</h5>
                    <Rating
                         initialRating={rating}
                         emptySymbol="far fa-star icon-color"
                         fullSymbol="fas fa-star icon-color"
                         readonly

                    />
                    <br/> 
                    <button onClick={handleClick} className="add-btn mt-2">Explore</button>
                    {/* <h6>Duration : {length}</h6> */}
                  
                    {/* <h4 className="my-2"> ৳ {fee}</h4> */}
                    {/* <button  onClick={ () => props.handleAddToCart(props.course)} className="add-btn"> Add to Cart</button> */}

        
                </div>
                
                
            </div>
            
        </div>
    );
};

export default HomeServiceDetail;