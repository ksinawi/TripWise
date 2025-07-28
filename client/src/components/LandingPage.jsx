import '../styles/landing-page.css';
import CountryCard from './CountryCard';
import { countries } from '../utils/countries.js';

import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';

import React, { useRef, useState } from 'react';
import DiscoverPage from './DiscoverPage';

const LandingPage = () => {

    const carouselRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0)

    const handleScrollNext = () => {
        setActiveIndex(prev => Math.min(prev + 1, countries.length - 1));
        if (carouselRef.current) {
            const card = carouselRef.current.querySelector('.country-card');
            const scrollBy = card ? card.offsetWidth + 20 : 320;
            carouselRef.current.scrollBy({ left: scrollBy, behavior: 'smooth' });
        }
    };

    const handleScrollPrev = () => {
        setActiveIndex(prev => Math.max(prev - 1, 0));
        if (carouselRef.current) {
            const card = carouselRef.current.querySelector('.country-card');
            const scrollBy = card ? card.offsetWidth + 20 : 320;
            carouselRef.current.scrollBy({ left: -scrollBy, behavior: 'smooth' });
        }
    };

  return (
    <div className='page-wrapper'>
        <div className="landing-page">
            <div className="landing-page-text">
                <p className="landing-page-title">
                With TripWise <br/>Travel Around The World
                </p>
                <p className="landing-page-p">
                Discover destinations effortlessly with TripWise, your AI-powered travel 
                companion. From planning to exploring, we help you experience the world smarter, 
                faster, and stress-free.
                </p>
                <button className="text-section-button" onClick={() => {
                    document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' })
                }}>Explore Now</button>
            </div>

            <div className="carousel-section">
                <div className="carousel-container" ref={carouselRef}>
                    <div className="carousel-track">
                        {countries.map((country, index) => (
                        <CountryCard key={index} country={country} isActive={index === activeIndex}/>
                        ))}
                    </div>
                </div>
                <div className="carousel-button-container">
                    <button className="carousel-prev" onClick={handleScrollPrev}>
                        <img src={arrowLeft} className="prev-img" />
                    </button>
                    <button className="carousel-next" onClick={handleScrollNext}>
                        <img src={arrowRight} className="next-img" />
                    </button>
                </div>
            </div>
        </div>

        <div id='discover' className="discover-section">
                <DiscoverPage/>
        </div>
    </div>
  );
};

export default LandingPage;
