import React from 'react';
import './Service.css';

const Service = (props) => {
    const { service, image, price, duration } = props.service;
    // console.log(props);

    return (
        <div className="course col">
            <div className="card h-100">


                <img className="card-img img-fluid" src={image} alt="" />

                <div className="card-body">
                    <h2 className="salmon-color">{service}</h2>
                    <h6>Duration : {duration} h</h6>
                    <h5>price : {price}</h5>
                    {/* <h6>Duration : {length}</h6> */}

                    {/* <h4 className="my-2"> ৳ {fee}</h4> */}
                    {/* <button  onClick={ () => props.handleAddToCart(props.course)} className="add-btn"> Add to Cart</button> */}


                </div>


            </div>

        </div>
    );
};

export default Service;