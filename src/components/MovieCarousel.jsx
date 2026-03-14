import { Swiper, SwiperSlide } from "swiper/react";
// módulo de navegación para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "./MovieCard";

function MovieCarousel({ movies }) {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 12 },
                768: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
        >
            {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <MovieCard
                        title={movie.title}
                        image={movie.image}
                        genre={movie.genre}
                        rating={movie.rating}
                        duration={movie.duration}
                        onVerDetalle={movie.onVerDetalle}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MovieCarousel;
