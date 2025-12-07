import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPreview from './pages/ProductPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-preview" element={<ProductPreview />} />
      </Routes>
    </Router>
  );
}

export default App;
