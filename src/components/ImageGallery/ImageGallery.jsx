import css from "./ImageFallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({data}) => {
    return (
        <ul className={css.image_gallery}>
            {data.map(({id}) => {
                <ImageGalleryItem key={id} />;
            })}
        </ul>
    );
};

export default ImageGallery;
