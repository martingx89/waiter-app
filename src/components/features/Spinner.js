import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <Spinner animation='border' role='status' variant='primary'>
      <span className='visually-hidden'>Spinner...</span>
    </Spinner>
  );
};

export default Loading;
