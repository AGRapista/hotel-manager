import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import './App.scss';

import UsersPage from './pages/users/UsersPage';
import DictionaryPage from './pages/dictionary/DictionaryPage';

// Layout component to wrap Sidebar and content
const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

// Placeholder components
const Home = () => <h1>Home Landing Page</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="dictionary" element={<DictionaryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
