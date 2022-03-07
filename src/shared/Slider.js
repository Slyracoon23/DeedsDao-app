import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import { primaryColor } from '../constants/theme';
import { defaultImages } from '../constants/mockup-data';

const SlickSlider = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {(images || defaultImages).map((s, idx) => (
          <div key={idx}>
            <div className="slide-wrapper">
              <img src={s} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  max-width: 60%;
  margin: 0 auto;

  .slide-wrapper {
    display: flex;
    justify-content: center;

    img {
      max-width: 60%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(6px);
      padding: 20px;
    }
  }

  .slick-next, .slick-prev {
    width: unset;
    height: unset;

    &::before {
      font-size: 40px;
      font-family: sans-serif;
      color: ${primaryColor};
    }
  }

  .slick-prev:before {
    content: '‹';
  }

  .slick-next:before {
    content: '›';
  }
`;


export default SlickSlider;