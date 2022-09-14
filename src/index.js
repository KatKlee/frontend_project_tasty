import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './index.scss'
import DishList from './pages/dishlist/DishList';
import DishDetails from './pages/dishdetails/DishDetails';
import DishDetailsRandom from './pages/dishdetailsrandom/DishDetailsRandom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchDishList from './pages/searchdishlist/SearchDishList'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dishlist:categoryid' element={<DishList />} />
        <Route path='/dishlist:categoryid/:dishid' element={<DishDetails />} />
        <Route path='/random' element={<DishDetailsRandom />} />
        <Route path='/searchdishlist:inputValue' element={<SearchDishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
