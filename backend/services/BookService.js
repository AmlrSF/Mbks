const BookRepository = require('../repositories/BookRepository');

const BookService = {
  async createBook(data) {
    return await BookRepository.create(data);
  },
  async getAllBooks() {
    return await BookRepository.findAll();
  },
  async getBookById(id) {
    const book = await BookRepository.findById(id);
    if (!book) throw new Error('Book not found');
    return book;
  },
  async updateBook(id, data) {
    return await BookRepository.updateById(id, data);
  },
  async deleteBook(id) {
    return await BookRepository.deleteById(id);
  },
};

module.exports = BookService;
