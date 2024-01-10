export const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={() => handleSubmit()}>
      <input
        type="text"
        placeholder="Enter the name of the movie"
        name="query"
      />
      <button type="submit">Search</button>
    </form>
  );
};
