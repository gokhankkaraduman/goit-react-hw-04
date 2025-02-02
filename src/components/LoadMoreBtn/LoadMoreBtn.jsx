import fetchData from "../../fetchData/fetchData.js";
import css from './LoadMoreBtn.module.css'

function LoadMoreBtn({ page, setPage, setPicture, searchTerm }) {
  const handlePage = async () => {
    const newPage = page + 1;  
    setPage(newPage);

    const newPictures = await fetchData(searchTerm, newPage); 
    setPicture((prevPictures) => [...prevPictures, ...newPictures]); 

    // Sayfa aşağı kaydırılsın
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 360);
  };

  return (
    <div className={css.wrapper}>
      <button 
        type="button"
        onClick={handlePage}
        className={css.btn}
      > 
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
