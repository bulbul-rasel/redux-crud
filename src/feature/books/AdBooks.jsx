import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const AdBooks = () => {
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numberOfBooks + 1, name, author };
        // const book = { id: uuidv4(), title, author };
        dispatch(addBook(book));
        navigate("/show-books", { replace: true });
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AdBooks;