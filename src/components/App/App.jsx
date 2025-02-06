import './App.css';
import { useEffect, useState } from 'react';
import fetchData from '../../fetchData/fetchData.js';
import fetchPopularData from '../../fetchData/fetchPopularData.js';

// Components
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import ImageLoader from '../Loader/Loader.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import Footer from '../Footer/Footer.jsx';
import GoUpsideButton from '../GoUpsideBtn/GoUpsideBtn.jsx';


function App() {

  // States
  const [picture, setPicture] = useState([]);
  const [page, setPage] = useState(1);
  const [loaders, setLoaders] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sayfa Açılınca Kullanılacak 
  useEffect(() => {
    const loadPopularImages = async () => {
      setLoaders(true);
      const popularImages = await fetchPopularData();
      setPicture(popularImages);
      setLoaders(false);
    };
    loadPopularImages();
  }, []);


  // Functions
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

// Search Function
  const handleSearchSubmit = async (term) => {
    if (!term) {
      setError(true);
      return;
    }
    setLoaders(true);
    setSearchTerm(term); 
    setPage(1); 
    const images = await fetchData(term, 1); 
    setPicture(images);
    setLoaders(false);
  };

  return (
    <div>
      <div className='header'>
        <SearchBar 
          onSearchSubmit={handleSearchSubmit} 
          setLoaders={setLoaders} 
          setError={setError} 
        />
      </div>
      {loaders ? (
        <ImageLoader />
      ) : (
        <ImageGallery picture={picture} onImageClick={handleOpenModal}/>
      )}

      {/* Eğer görseller varsa Load More butonu göster */}
      {searchTerm.length > 0 && (
        <LoadMoreBtn page={page} setPage={setPage} setPicture={setPicture} searchTerm={searchTerm} />
      )}
      <ImageModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        selectedImage={selectedImage}
      />
      <GoUpsideButton />
      <Footer />
    </div>
  );
}

export default App;
