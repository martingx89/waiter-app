import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tableRedux';

const Table = () => {
  const table = useSelector((state) => getTableById);
  return <div>Table</div>;
};

export default Table;
