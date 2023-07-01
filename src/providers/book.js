const { Book } = require('../models');
const { Op } = require('sequelize');


//CRUD libro

const createBook = async(book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (error) {
        console.error("Error when creating Book", error);
    }
}
const getBook = async(bookId) => {
    try {
        const bookFound = await Book.findByPk(bookId, {
            where: { deleted: 0},
            include: {all: true}});
        return bookFound;
    } catch (error) {
        console.error("Error when feching Book", error);
        throw error;
    }
}

const getAllBooks = async() => {
    try {
      const books = await Book.findAll({
        where: { deleted: 0},
        include: {
            all: true
        }
      });
      return books;
    } catch (error) {
      console.error("Error when fetching Book", error);
      throw error;
    }
};

const updateBook = async(bookId, book) => {
    try {
        const bookFound = await Book.findByPk(bookId, {
            include: {all: true},
        });
        if(bookFound) {
            await bookFound.update(book);
            return bookFound;
        }else{
            throw new Error("Book not found");
        }       
    } catch (error) {
        console.error("Error when updating Book", error);
      throw error;
    }
}
const deleteBook = async(bookId) => {
    try {
        const bookFound = await Book.findByPk(bookId, {include: {all: true}});
        if(bookFound) {
            bookFound.deleted = true;
            bookFound.save();
            return bookFound;
        }else{
            throw new Error("Book not found");
        }       
    } catch (error) {
        console.error("Error at deleting Book", error);
      throw error;
    }
}

module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBook,
    getAllBooks    
}