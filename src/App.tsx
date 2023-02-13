import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeComponent } from './pages';
import { ForwardingRefComponent } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
        <Route path='/forwardingref' element={<ForwardingRefComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
