import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';

const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
