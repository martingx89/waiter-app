import { Button, ListGroup, Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import { Link } from 'react-router-dom';
import Loading from '../features/Spinner';

const Home = () => {
  const tables = useSelector(getAllTables);

  const deleteAction = (e) => {
    e.preventDefault();
    console.log('test');
  };

  if (tables.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className='my-4'>All tables</h1>
      <ListGroup variant='flush'>
        {tables.map((table) => (
          <ListGroup.Item key={table.id} {...table} className='px-0'>
            <Stack direction='horizontal' gap={4}>
              <h2>Table {table.id}</h2>
              <p className='mb-1'>
                <strong>Status: </strong>
                {table.status}
              </p>
              <Link className='ms-auto' to={`/table/${table.id}`}>
                <Button variant='primary'>Show more</Button>
              </Link>
              <Button variant='danger' onClick={deleteAction}>
                Delete
              </Button>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;
