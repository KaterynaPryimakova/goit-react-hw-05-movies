import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  return (
    <>
      <div>
        <h2>Trending today</h2>
        <ul>
          <TrendingList />
        </ul>
      </div>
    </>
  );
};
export default Home;
