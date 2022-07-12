import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import beautyImg from "../assets/beauty.jpg";
import womannImg from "../assets/womann.jpg";
import womansImg from "../assets/womans.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
     <Carousel>
        <Carousel.Item>
            <img 
            width={700}
            height={700}
            className="d-block w-100"
            src={ beautyImg }
            alt="Beauty"
            />
            <Carousel.Caption>
                <h3>Beauty image</h3>
                <p>Beauty is an open letter of recommendation that wins the heart in advance.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            width={700}
            height={700}
              className="d-block w-100"
              src={ womannImg }
              alt="Beauty"
            />
            <Carousel.Caption>
                <h3> Dark beauty image</h3>
                <p>Beauty is an open letter of recommendation that wins the heart in advance.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            width={700}
            height={700}
              className="d-block w-100"
              src={ womansImg }
              alt="Beauty"
            />
            <Carousel.Caption>
                <h3>Beauty image</h3>
                <p>Beauty is an open letter of recommendation that wins the heart in advance.</p>
            </Carousel.Caption>
        </Carousel.Item>
     </Carousel>
    )
  }
}
