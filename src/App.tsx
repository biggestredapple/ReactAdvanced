import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, ForwardingRefPage, PortalPage, SuspensePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/forwardingref' element={<ForwardingRefPage />}></Route>
        <Route path='/portal' element={<PortalPage />}></Route>
        <Route path='/suspense' element={<SuspensePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
