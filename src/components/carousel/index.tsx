import React, { useEffect, useRef, useState } from 'react';
import './carousel.scss';
import IcBtnSlide from "../../assets/img/icon/slide-nav.png";

interface CarouselProps {
    children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const totalSlides = React.Children.count(children);

    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.offsetWidth * currentIndex;
            containerRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    }, [currentIndex]);

    return (
        <div className='carousel'>
            <div className="carousel-container">
                <div className="carousel-wrapper" ref={containerRef}>
                    {React.Children.map(children, (child) => (
                        <>
                            {child}
                        </>
                    ))}
                </div>
            </div>
            <div className="btn-container__slide">
                <button onClick={handlePrev} disabled={currentIndex === 0} className={`slide-btn__about ${currentIndex === 0 ? 'disabled' : ''}`} ><img className='slideBtn-img' src={IcBtnSlide} width={6} height={12} alt='prev' /></button>
                <button onClick={handleNext} disabled={currentIndex === children.length - 1} className={`slide-btn__about ${currentIndex === children.length - 1 ? 'disabled' : ''}`}><img className='slideBtn-img' src={IcBtnSlide} width={6} height={12} alt='next' /></button>
            </div>
        </div>
    );
};

export default Carousel;
