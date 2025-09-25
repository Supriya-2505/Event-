import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import Footer from './components/Shared/Footer';
import Dashboard from './pages/Dashboard';
import EventPage from './pages/EventPage';
import CalendarPage from './pages/CalendarPage';
import TaskPage from './pages/TaskPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const isLoggedIn = () => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  };

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn()) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div>
                  <Navbar />
                  <div className="app-content">
                    <Sidebar />
                    <main className="main-content">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/events" element={<EventPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        <Route path="/tasks" element={<TaskPage />} />
                      </Routes>
                    </main>
                  </div>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
