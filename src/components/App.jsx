import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
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
      </Route>
    </Routes>
  );
};
