import React from 'react';

const HomeCourseDetail = (props) => {
    const {title,instructor,category,length ,fee, image} = props.course;
    // console.log();
    

    return (
        <div className="course col">
            <div className="card h-100">

               
                <img className="card-img " src={image} alt="" />
                
                <div className="card-body">
                    <h2 className="salmon-color">{title}</h2>
                    <h6>Instructor : {instructor}</h6>
                    <h5>Category : {category}</h5>
                    <h6>Duration : {length}</h6>
                  
                    <h4 className="my-2"> ৳ {fee}</h4>
                    <button  onClick={ () => props.handleAddToCart(props.course)} className="add-btn"> Add to Cart</button>

        
                </div>
                
                
            </div>
            
        </div>
    );
};

export default HomeCourseDetail;