import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../redux/tableRedux';

const Table = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));
  return (
    <div>
      <h1 className='my-4'>Table {table.id}</h1>
    </div>
  );
};

export default Table;
