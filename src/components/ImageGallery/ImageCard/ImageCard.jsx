import css from './ImageCard.module.css';

function ImageCard({ picture, onImageClick }) {
  return (
    <div className={css.masonry}>
      {picture.map((item) => (
        <div key={item.id} className={css.masonry_item}>
          <img
            src={item.urls.regular}
            alt={item.description}
            className={css.masonry_img}
            onClick={() => onImageClick(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageCard;
