import React from 'react';
import './Course.css';
// import calender from '../../image/ICON/calendar-solid.svg';
// import groupImage from '../../image/ICON/group.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Rating from 'react-rating';

const Course = (props) => {

    const {title,instructor,category,length , fee, image} = props.course;
    // console.log();
    // const addCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="course col">
            <div className="card h-100">

               
                <img className="card-img " src={image} alt="" />
                
                <div className="card-body">
                    <h2 className="salmon-color">{title}</h2>
                    <h6>Instructor : {instructor}</h6>
                    <h5>Category : {category}</h5>
                    <h6>Duration : {length}</h6>
                    
                    {/* <Rating
                         initialRating={rating}
                         emptySymbol="far fa-star icon-color"
                         fullSymbol="fas fa-star icon-color"
                         readonly

                    /> */}
                    <h4 className="my-2"> ৳ {fee}</h4>
                    <button  onClick={ () => props.handleAddToCart(props.course)} className="add-btn"> Add to Cart</button>

        
                </div>
                
                {/* <div className="card-footer d-flex justify-content-between ">
                    <div className="d-flex align-items-center ps-4 pb-3">
                        <img src={calender} alt="" height="20px" width="20px" />
                        <h6 className="footer-img">Starts 27 Nov, 2021</h6>
                    </div>
                    <div class="seats d-flex align-items-center pe-3 pb-3">
                          <img src={groupImage} alt="" height="20px" width="20px"/>
                          <h6 className="footer-img">40 seats</h6>
                    </div>
                </div> */}
            </div>
            
        </div>
    );
};

export default Course;