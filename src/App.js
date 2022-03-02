import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Missions, Rockets, Profile } from './components';
import './App.css';

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
