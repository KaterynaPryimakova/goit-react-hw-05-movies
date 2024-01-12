import css from './SearchForm.module.css';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

export const SearchForm = ({ handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={() => handleSubmit()}>
      <input
        className={css.input}
        type="text"
        placeholder="Enter the name of the movie"
        name="query"
      />
      <button className={css.button} type="submit">
        <SearchIcon className={css.icon} />
      </button>
    </form>
  );
};
