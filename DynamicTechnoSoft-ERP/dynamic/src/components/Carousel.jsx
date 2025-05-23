import React from 'react'
import './Carousel.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Company1 from "../assets/images/company1.png";
import Company2 from "../assets/images/company2.png";
import Company3 from "../assets/images/company3.png";
import Company4 from "../assets/images/company4.png";
import Company5 from "../assets/images/company5.png";
import Company6 from "../assets/images/company6.png";
import Company7 from "../assets/images/company7.png";


function CustomRightArrows(props) {
  const {  onClick } = props;
  return (
    <div
      
      style={{ position:"absolute",right:"-10%", top:"20%", transform: "translate(-50%, -50%)", color:"black",width:"fit",cursor:"pointer",
        
       }}
      onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </div>
  );
}

function CustomLeftArrows(props) {
  const { onClick } = props;
  return (
    <div
      style={{position: "absolute",left:"-10%",  top: "20%",color:"black",width:"fit",cursor:"pointer",
        transform: "translateY(-50%)", 
       }}
      onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
    </div>
  );
}



function CustomArrows() {
  const settings = {
    centerMode: true,
    infinite: true,
    // centerPadding: "20px",
    
    slidesToShow: 7,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    // slidesToScroll:3,
    nextArrow: <CustomRightArrows / >,
    prevArrow: <CustomLeftArrows />,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        }
      }
    ]
  };






  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div className='images'>
            <img src={Company1}></img>
        </div>
        <div className='images'>
            <img src={Company2}></img>
        </div>
        <div className='images' >
            <img src={Company3}  ></img>
        </div>
        <div>
            <img src={Company4}></img>
        </div>
        <div className='images'>
            <img src={Company5}></img>
        </div>
        <div className='images'>
            <img src={Company6}></img>
        </div>
              {/* <div className='images'>
            <img src={Company7}></img>
        </div> */}
      </Slider>
    </div>
  );
}


export default CustomArrows;
