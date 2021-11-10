import { FC } from 'react';
import { Route } from 'react-router-dom';
import Hello from './components/Hello/Hello';
import './App.css';

const App:FC = () => {
  return (
    <div className="App">
      <Route
        path="/"
        >
        <Hello />
      </Route>
    </div>
  );
}

export default App;
