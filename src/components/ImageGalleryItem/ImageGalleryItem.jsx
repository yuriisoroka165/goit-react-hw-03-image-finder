import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, onImageClick }) => {
    return (
        <li className={css.image_gallery_item}>
            <img
                className={css.image_gallery_item__image}
                src={image.webformatURL}
                alt={image.tags}
                onClick={() => onImageClick(image.largeImageURL)}
            />
        </li>
    );
};

export default ImageGalleryItem;
