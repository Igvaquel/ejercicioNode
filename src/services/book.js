const { bookProvider } = require("../providers");

const createbook = async(book) => {
    return await bookProvider.createBook(book);
};

const getBook = async(bookId) =>{
    const book = await bookProvider.getBook(bookId);
    return book;
};

const getAllBooks = async(titulo,id) =>{
    const books = await bookProvider.getAllBooks({titulo, id});
    return books;
};

const updateBook = async(bookId, book) => {
    const bookFound = await bookProvider.getBook(bookId);
    if(bookFound){
        const bookUpdated = await bookProvider.updateBook(bookId, book);
        return bookUpdated;
    }
    return null;
};

const deleteBook = async(bookId) => {
    return await bookProvider.deleteBook(bookId);
};

module.exports = {
    createbook,
    getBook,
    getAllBooks,
    updateBook,
    deleteBook
};