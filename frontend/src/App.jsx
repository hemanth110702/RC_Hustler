import './App.css'
import { Routes, Route } from 'react-router-dom';
import PowerChart from './components/PowerChart';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PowerChart />} />
      </Routes>
    </>
  );
}

export default App
