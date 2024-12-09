const BookService = require('../services/BookService');

const BookController = {
  async create(req, res) {
    try {
      const book = await BookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getAll(req, res) {
    const books = await BookService.getAllBooks();
    res.status(200).json(books);
  },
  async getOne(req, res) {
    try {
      const book = await BookService.getBookById(req.params.id);
      res.status(200).json(book);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  async update(req, res) {
    try {
      const book = await BookService.updateBook(req.params.id, req.body);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async delete(req, res) {
    try {
      await BookService.deleteBook(req.params.id);
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = BookController;
