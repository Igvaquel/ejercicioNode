const { bookService } = require("../services");

const createBookController = async(req,res) => {
    try {
        const newbook  = await bookService.createbook(req.body);
        res.json(newbook);
    } catch (error) {
        res.status(500).json({ action: "createBook", error: error.message});
    }
};

const getBookController = async (req,res) => {
    try {
        const book = await bookService.getBook( req.params.bookId );
        if(!book){
            res.status(404).json({action: "getBook", error: "Book not found"});
        }else{
            res.json(book);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getBook", error: error.message});
    }
};

const getAllBooksController = async (req,res) => {
    try {
        const books = await bookService.getAllBooks( req.params.titulo, req.params.bookId );
        if(!books){
            res.status(404).json({action: "getAllBooks", error: "Any Book was found"});
        }else{
            res.json(books);
        }
        
    } catch (error) {
        res.status(500).json({ action: "getAllBooks", error: error.message});
    }
};

const updateBookController = async(req,res) => {
    try {
        const book = await bookService.updateBook( req.params.bookId, req.body );
        if(!book){
            res.status(404).json({action: "updateBook", error: "Book not found"});
        }else{
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ action: "updateBook", error: error.message});
        
    }
}

const deleteBookController = async(req,res) => {
    try {
        const book = await bookService.deleteBook( req.params.bookId);
        if(!book){
            res.status(404).json({action: "deleteBook", error: "Book not found"});
        }else{
            res.json(book);
        }
    } catch (error) {
        res.status(500).json({ action: "deleteBook", error: error.message});
        
    }
}

module.exports = {
    createBookController,
    getBookController,
    getAllBooksController,
    updateBookController,
    deleteBookController
}


