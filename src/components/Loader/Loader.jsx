import React from 'react';
import css from './Loader.module.css';  // Doğru stil dosyasını import ediyoruz
import { PropagateLoader, BarLoader } from 'react-spinners'; // Correct import

const ImageLoader = () => {
    return (
        <div className={css.loader}>
            <PropagateLoader
                color="#2d5a7d"
                loading={true}
                size={20}
                speedMultiplier={1}
            />
        </div>
    );
};

export default ImageLoader;
