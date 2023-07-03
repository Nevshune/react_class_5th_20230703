import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselMain() {
    return (
        <Carousel 
        autoPlay={true} 
        showThumbs={false} 
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        interval={5000}
        transitionTime={1400}
        stopOnHover={false}
        animationHandler="fade"
        >
            {/* 1번캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="main carousel1" />
            </div>
            {/* 2번캐러셀 */}
            <div className="w-full">
                <img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="main carousel2" />
            </div>
        </Carousel>
    )
}