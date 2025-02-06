import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa'; // React Icons'dan bir ikon import ettik

import styles from './GoUpsideBtn.module.css'; // CSS Module import ettik

function GoUpsideButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={styles.goUpsideButton} // CSS Module'dan stil uyguladık
        >
          <FaChevronUp className={styles.icon} /> {/* İkon için stil uyguladık */}
        </button>
      )}
    </div>
  );
}

export default GoUpsideButton;