import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Feed from './Components/Feed.js';
import Login from './Components/Login.js';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (<Login />) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
