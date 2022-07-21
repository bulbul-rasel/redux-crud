import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateBook } from './BookSlice';
import { useNavigate } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [author, setAuthor] = useState(location.state.author);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, name, author }));
        navigate("/show-books", { replace: true });

    };
    return (
        <div>
            <h2>Edit Book</h2>
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
                <button type="submit">Edit Book</button>
            </form>
        </div>
    );
};

export default EditBook;