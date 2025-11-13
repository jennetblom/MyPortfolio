
import './App.css'
import Layout from './components/Layout/Layout.jsx';

import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects/Projects.jsx';
function App() {


  return (

    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </div>

  )
}

export default App
