import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./Button";

function FeaturedCarousel({ movies, onMovieClick }) {
    return (
        <div className="featured-carousel">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
                loop={true}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="featured-slide">
                            {/* Fondo con imagen de la película */}
                            <div
                                className="featured-slide-bg"
                                style={{ backgroundImage: `url(${movie.image})` }}
                            />
                            <div className="featured-slide-overlay" />

                            {/* Contenido */}
                            <div className="featured-slide-content">
                                <div className="featured-slide-poster">
                                    <img src={movie.image} alt={movie.title} />
                                </div>
                                <div className="featured-slide-info">
                                    <span className="featured-label">DESTACADA DE LA SEMANA ⭐</span>
                                    <h2 className="featured-slide-title">{movie.title}</h2>
                                    <div className="featured-actions">
                                        <Button
                                            text="Comprar boletos"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onMovieClick(movie.id);
                                            }}
                                        />
                                        <Button
                                            text="Ver trailer"
                                            variant="outline"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onMovieClick(movie.id);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FeaturedCarousel;
