import css from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {
    return (
        <header className={css.Searchbar}>
            <form onSubmit={onSubmit} className={css.SearchForm}>
                <button type="submit" className={css.SearchForm__button}>
                    <span className={css.SearchForm__button_label}>Search</span>
                </button>

                <input
                    className={css.SearchForm__input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
