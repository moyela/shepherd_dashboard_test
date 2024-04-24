import { useState } from 'react';

interface Slide {
    icon: JSX.Element;
    text: string;
}

interface CarouselProps {
    slides: Slide[];
}

export default function CarouselSlider({ slides }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
    <div className="carousel-slider flex flex-row">
        <div className="nav-buttons">
            <div className="arrow" onClick={prevSlide}>{'<'}</div>
        </div>
        <div className="slide flex flex-col">
            <div className="icon">{slides[currentSlide].icon}</div>
            <div className="text-xs">{slides[currentSlide].text}</div>
        </div>
        <div className="nav-buttons">
            <div className="arrow" onClick={nextSlide}>{'>'}</div>
        </div>
    </div>
    );
};

