import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <form>
              <input
                type="text"
                name="search"
                placeholder="Enter the name of the movie"
              />
              <button type="submit">Search</button>
            </form>
          }
        />
      </Routes>
    </div>
  );
};
