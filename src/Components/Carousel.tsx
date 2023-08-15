import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Result } from "../Interfaces/apiInterface";
import Loader from "./Loader";

interface CarouselProps {
  chars: Result[];
}

const Carousel = (props: CarouselProps) => {
  if (props.chars.length === 0) {
    return <Loader />;
  } else
    return (
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={props.chars?.[0].image}
            alt="slide 2"
            style={{ maxHeight: "20rem" }}
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>Rick- API</h5>
            <p>Some representative placeholder content by Jean.</p>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={props.chars?.[1].image}
            alt="slide 2"
            style={{ maxHeight: "20rem" }}
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>Rick- API</h5>
            <p>Some representative placeholder content by Jean.</p>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={props.chars?.[3].image}
            alt="slide 3"
            style={{ maxHeight: "20rem" }}
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>Rick- API</h5>
            <p>Some representative placeholder content by Jean.</p>
          </div>
        </CCarouselItem>
      </CCarousel>
    );
};

export default Carousel;
