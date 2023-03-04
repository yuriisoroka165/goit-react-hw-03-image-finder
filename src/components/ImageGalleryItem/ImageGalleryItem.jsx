import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({image, description}) => {
    return (
        <li className={css.image_gallery_item}>
            <img
                className={css.image_gallery_item__image}
                src={image}
                alt={description}
            />
        </li>
    );
};

export default ImageGalleryItem;