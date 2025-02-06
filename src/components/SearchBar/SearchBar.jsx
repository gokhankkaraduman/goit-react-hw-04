import css from './SearchBar.module.css';
import { Formik, Field, Form } from 'formik';
import { useId } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = ({ onSearchSubmit, setError }) => {
    const toastConfig = {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    };

    const searchId = useId();

    const handleSearch = async (values, { resetForm }) => {
        if (!values.searchTerm) {
            toast.error('The search field cannot be empty. Please provide a valid term to search.', toastConfig);
            setError(true);
            return;
        }
        onSearchSubmit(values.searchTerm);
        resetForm(); 
    };

    return (
        <header className={css.header}>
            <div className={css.logocontainer}>
                <h1 className={css.logotitle}>
                    <FaSearch className={css.logoicon} />
                    Inspirography
                </h1>
            </div>

            <Formik initialValues={{ searchTerm: "" }} onSubmit={handleSearch}>
                {({ values, handleChange, resetForm }) => (
                    <Form className={css.form}>
                        <Field
                            type="text"
                            name="searchTerm"
                            id={searchId}
                            className={css.input}
                            placeholder="Let your creativity flow. Explore stunning images..."
                        />
                        {values.searchTerm && (
                            <button 
                                type="button" 
                                className={css.clearButton} 
                                onClick={() => { 
                                    resetForm(); 
                                    toast.success('Search term cleared successfully.', toastConfig);
                                }}
                            >
                                <ImCross className={css.cross} />
                            </button>
                        )}
                        <button type="submit" className={css.searchButton}>
                            <FaSearch className={css.svg} /> <span>Search</span>
                        </button>
                    </Form>
                )}
            </Formik>

            <ToastContainer />
        </header>
    );
};

export default SearchBar;