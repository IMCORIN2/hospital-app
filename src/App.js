import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroPage from './pages/Intro-hospitalPage';
import SolutionPage from './pages/SolutionPage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import EventPage from './pages/EventPage';
import TopNav from './components/TopNav';
import TopBanner from './components/TopBanner';
import DoctorsPage from './pages/Intro-doctorPage';
import MachinesPage from './pages/Intro-machinePage';
import LocationPage from './pages/LocationPage';
function App() {
    return (
        <Router>
            <TopBanner />
            <TopNav />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/intro" element={<IntroPage />} />
                <Route path="/doctor" element={<DoctorsPage />} />
                <Route path="/machine" element={<MachinesPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/solution" element={<SolutionPage />} />
                <Route path="/before-after" element={<BeforeAfterPage />} />
                <Route path="/event" element={<EventPage />} />
            </Routes>
        </Router>
    );
}

export default App;
