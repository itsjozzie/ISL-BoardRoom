import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarPage from './BoardRoom/components/sidebar/SidebarPage';
import HomePage from './BoardRoom/pages/Homepage/HomePage';
import BookingPage from './BoardRoom/pages/Booking/BookingPage';
import UpcomingBookings from './BoardRoom/pages/Booking/UpcomingBookings';
import BookingHistory from './BoardRoom/pages/Booking/BookingHistory';
import BoardroomPage from './BoardRoom/pages/BoardRoom/BoardroomPage';
import SettingsPage from './BoardRoom/pages/settings/SettingsPage';
import NotificationSettings from './BoardRoom/pages/settings/NotificationSettings';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SidebarPage />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />}>
              <Route path="upcoming" element={<UpcomingBookings />} />
              <Route path="history" element={<BookingHistory />} />
            </Route>
            <Route path="/settings" element={<SettingsPage />}>
              <Route path="notifications" element={<NotificationSettings />} />
            </Route>
            <Route path="/boardrooms" element={<BoardroomPage />} />
        
            {/* Add more routes as necessary */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
