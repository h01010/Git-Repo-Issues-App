import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          {/* TODO: not found 페이지 컴포넌트 구현 */}
          <Route path="*" element={<h1> not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
