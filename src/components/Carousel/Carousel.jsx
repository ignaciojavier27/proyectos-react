import Titulo from "../Titulo";
import "./Carousel.css";
import { useState } from "react";

const images = [
    { id: 1, url: "/imagen.jpg", alt: "Descripción de la imagen 1" },
    { id: 2, url: "/imagen2.jpg", alt: "Descripción de la imagen 2" },
    { id: 3, url: "/imagen3.jpg", alt: "Descripción de la imagen 3" },
    { id: 4, url: "/imagen4.jpg", alt: "Descripción de la imagen 4" },
];

console.log(images)

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const toNextImage = () => {
        currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    };
      
    const toPrevImage = () => {
        currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(currentIndex - 1)
    };

    return (
        <article>
        <Titulo titulo="Carrusel Imágenes" />
        <div className="carousel-container">
            <button className="arrow-right" onClick={toNextImage}>
                <i className="fa-solid fa-arrow-right fa-xl"></i>
            </button>
            <button className="arrow-left" onClick={toPrevImage}>
                <i className="fa-solid fa-arrow-left fa-xl"></i>
            </button>
            <div className="carousel-container-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image) => (
                    <img key={image.id} src={image.url} alt={image.alt} width="100%" />
                ))}
            </div>
        </div>
        </article>
    );
};

export default Carousel;
