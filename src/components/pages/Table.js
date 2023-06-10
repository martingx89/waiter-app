import { Form, Row, Col, Stack, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTableById } from '../../redux/tableRedux';

const Table = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));
  return (
    <div>
      <h1 className='my-4'>Table {table.id}</h1>
      <Form>
        <Form.Group as={Row} className='my-3'>
          <Form.Label column sm={1}>
            <strong>Status:</strong>
          </Form.Label>
          <Col sm={4}>
            <Form.Select>
              <option>Busy</option>
              <option>Reserved</option>
              <option>Free</option>
              <option>Cleaning</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='my-3'>
          <Form.Label column sm={1}>
            <strong>People:</strong>
          </Form.Label>
          <Col sm={1}>
            <Form.Control type='number' min='0' max='10'></Form.Control>
          </Col>
          /
          <Col sm={1}>
            <Form.Control type='number' min='0' max='10'></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='my-3'>
          <Stack direction='horizontal'>
            <Form.Label column sm={1}>
              <strong>Bill:</strong>
            </Form.Label>
            <Form.Text>
              <p className='m-1'>$ </p>
            </Form.Text>
            <Col sm={1}>
              <Form.Control type='number' />
            </Col>
          </Stack>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Table;
