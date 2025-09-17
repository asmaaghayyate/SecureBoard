import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const toggle = () => setShowLogin(!showLogin);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={showLogin ? <Login toggle={toggle} /> : <Register toggle={toggle} />} />
          <Route path="/register" element={!showLogin ? <Register toggle={toggle} /> : <Login toggle={toggle} />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
