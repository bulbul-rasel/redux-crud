const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
    books: [
        { id: 1, name: "Cholo Bangladesh", author: "Bulbul Ahammed" },
        { id: 2, name: " Desh O Matir Golpo", author: "Bulbul Ahammed" },
        { id: 3, name: "Matir Horin", author: "Bulbul Ahammed" },
    ],
};

const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        },
        updateBook: (state, action) => {
            const { id, name, author } = action.payload;
            const isExist = state.books.filter(book => book.id === id);
            if (isExist) {
                isExist[0].name = name;
                isExist[0].author = author;
            }
        },
    },
})

export const { showBooks, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;