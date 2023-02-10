import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeComponent } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
