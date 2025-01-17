import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './components/Login/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>

    <App />
    </AuthProvider>
    
  </Router>
);

