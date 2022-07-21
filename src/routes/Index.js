import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdBooks from '../feature/books/AdBooks';
import BooksView from '../feature/books/BooksView';
import EditBook from '../feature/books/EditBook';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/show-books' element={<BooksView />}></Route>
                    <Route path='/add-book' element={<AdBooks />}></Route>
                    <Route path='/edit-book' element={<EditBook />}></Route>
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;