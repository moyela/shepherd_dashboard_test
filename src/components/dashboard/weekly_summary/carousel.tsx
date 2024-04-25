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
    <div className=" flex flex-row justify-between">
        <div className="">
            <div className="arrow" onClick={prevSlide}>{'<'}</div>
        </div>
        <div className=" flex flex-col mx-auto text-center gap-8 mt-7">
            <div className="text-4xl">{slides[currentSlide].icon}</div>
            <div className="text-xs ">{slides[currentSlide].text}</div>
        </div>
        <div className="">
            <div className="arrow text-sm" onClick={nextSlide}>{'>'}</div>
        </div>
    </div>
    );
};

