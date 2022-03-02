import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// prettier-ignore
import {
  Header, Missions, Rockets, Profile,
} from './components';
import './App.css';

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
