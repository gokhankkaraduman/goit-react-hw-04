import ImageCard from './ImageCard/ImageCard.jsx'
import css from './ImageGallery.module.css'

function ImageGallery ({picture , onImageClick}) {
    return (
    <div className={css.container}>
        <div className={css.img_wrapper}>
            <ImageCard picture={picture} onImageClick={onImageClick} />
        </div>
    </div>
    )
};

export default ImageGallery;