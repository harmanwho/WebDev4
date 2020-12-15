import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../../css/carousel.css";
// import ReactSpinner from 'react-bootstrap-spinner'

function CustomCarousel({images, modal}) {
	return (	
        <Carousel className="carousel-custom">
            {/* <ReactSpinner type="border" color="primary" size="5" /> */}
            {images.map (image =>
                <Carousel.Item key={images.indexOf(image)}>
                    <img
                    className={(modal) ? "d-block carousel-modal-img" : "d-block carousel-img"}
                    src={image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p>{images.indexOf(image) + 1} / {images.length}</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            )}
            
        </Carousel>
	);
}
export default CustomCarousel;
