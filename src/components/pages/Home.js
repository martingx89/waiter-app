import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tableRedux';

const Home = () => {
  const tables = useSelector(getAllTables);
  console.log(tables);
  return <div>Home</div>;
};

export default Home;
