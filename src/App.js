import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/table/:id' element={<Table />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
