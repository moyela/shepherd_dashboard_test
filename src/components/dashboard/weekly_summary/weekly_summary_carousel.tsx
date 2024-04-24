// import Carousel from "react-multi-carousel"
// import 'react-multi-carousel/lib/styles.css';
import "./weekly_summary_carousel.css"
import CarouselSlider from "./carousel";

export default function WeeklySummaryCarousel() {
    const slides = [
      {
          icon: <span>📖</span>,
          text: "You've studied for 10m/1hr today",
      },
      {
          icon: <span>⚡</span>,
          text: "You're on a 3-day streak!",
      },
      {
        icon: <span>🔥</span>,
        text: "6 hours learning this week!",
      },
      // Add more slides as needed
    ];

    return (
      <div className="">
          <CarouselSlider slides={slides} />
      </div>
    )
}
