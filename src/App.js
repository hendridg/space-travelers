import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchApiRockets } from './redux/rockets/rockets';
import { fetchApiMissions } from './redux/missions/missions';
// prettier-ignore
import {
  Header, Missions, Rockets, Profile,
} from './components';
import './App.css';

function App() {
  const API_ROCKETS = 'https://api.spacexdata.com/v3/rockets';
  const API_MISSIONS = 'https://api.spacexdata.com/v3/missions';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiMissions(API_MISSIONS));
    dispatch(fetchApiRockets(API_ROCKETS));
  }, []);
  return (
    <div className="App">
      <Router className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<h1>Don&apos;t exist</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
