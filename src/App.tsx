import { FC, useState } from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom';
import Hello from './components/Hello/Hello';
import './App.css';
import Copy from './components/Copy/Copy';

// export interface RouteProps {
//     path?: string | string[];
//     element?: React.ReactElement | null;
//     exact?: boolean;
// }

const App:FC = () => {

  return (
    <Router>
      <Routes>

          <Route
          element={<Hello />} path="/helloworld"/>

          <Route
          element={<Copy />} path="/copy"/>

      </Routes>
    </Router>
  );
}

export default App;
