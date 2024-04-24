// import Carousel from "react-multi-carousel"
// import 'react-multi-carousel/lib/styles.css';
import "./weekly_summary_carousel.css"
import CarouselSlider from "./carousel";

export default function WeeklySummaryCarousel() {
    const slides = [
      {
          icon: <span>🍎</span>,
          text: 'Slide 1 Text',
      },
      {
          icon: <span>🍊</span>,
          text: 'Slide 2 Text',
      },
      // Add more slides as needed
    ];

    return (
      <div>
          <CarouselSlider slides={slides} />
      </div>
    )
}
