import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <ul className={css.image_gallery}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                    onImageClick={onImageClick}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;
