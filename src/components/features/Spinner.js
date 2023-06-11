import Spinner from 'react-bootstrap/Spinner';

const Loading = (props) => {
  return (
    <Spinner animation='border' role='status' variant='primary' className='text-center my-4'>
      <span className='visually-hidden'>{props.children}</span>
    </Spinner>
  );
};

export default Loading;
