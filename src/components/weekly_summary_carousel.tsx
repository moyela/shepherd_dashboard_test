import Carousel from "react-multi-carousel"

export default function WeeklySummaryCarousel() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Carousel responsive={responsive}>
            <div>
                Item 1
            </div>
            <div>
                Item 2
            </div>
            <div>
                Item 3
            </div>
        </Carousel>
    )
}