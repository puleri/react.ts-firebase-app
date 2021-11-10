import { FC, useState } from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Hello from './components/Hello/Hello';
import './App.css';

export interface RouteProps {
  props: {
    path?: string;
    default?: boolean;
    exact?: boolean;
  }
}

const App:FC = () => {


  return (
    <Router>
      <Routes>

          <Route element={<Hello />} path="/"/>

      </Routes>
    </Router>
  );
}

export default App;
