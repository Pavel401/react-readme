import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-y-scroll">
        <Sidebar />
        <div className="w-1/4 bg-blue-200">
          {/* Your content here */}
        </div>
        <div className="w-1/2 bg-green-200">
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
}

export default App;
