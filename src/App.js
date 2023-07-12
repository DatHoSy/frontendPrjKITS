import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PrimaryLayout } from 'components/Layout';
import HomePage from 'containers/Home';
import NotFoundPage from 'containers/404Page';
import DetailPage from 'containers/Detail';

function App() {
  return (
    <Routes>
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
