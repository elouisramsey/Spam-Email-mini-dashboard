import React from 'react';
import { Route, Router, Routes } from 'react-router-dom'

import NavIndex from 'Layouts/Nav'
import HomeIndex from 'Pages/Home/HomeIndex';
import User from 'Pages/Home/User';
import RequestIndex from 'Pages/Requests/RequestIndex';

function App() {
  return (
    <div className='h-screen flex'>
      <NavIndex />
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/requests' element={<RequestIndex />} />
      </Routes>
    </div>
  )
}

export default App;
