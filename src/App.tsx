import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import V1 from './pages/V1';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/v1" element={<V1 />} />
      <Route path="/resume" element={<Navigate to="/Meder_Taabaldiev_CV_2024.pdf" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
