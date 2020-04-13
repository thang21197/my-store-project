import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
function App() {
  return ( 
     <div>
  <Router>
        <Navbar/>
        <Sidebar/>
        <Content/>
  </Router>
</div>
  );
}

export default App;
