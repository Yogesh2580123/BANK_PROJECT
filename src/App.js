import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter ,Router,Route, Routes} from 'react-router-dom';
import AddUser from './Components/Apps/admin_app/AddUser';
import Show from './Components/Apps/admin_app/ShowUser';
import GST from './Components/GST/Gst';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout />
      <Routes>
      <Route path="/add" element={<AddUser />} />
      <Route path="/show" element={<Show />}/>
      <Route path="/gst" element={<GST />}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;