const Book = require('../models/Book');

const BookRepository = {
  async create(data) {
    return await Book.create(data);
  },
  async findAll() {
    return await Book.find();
  },
  async findById(id) {
    return await Book.findById(id);
  },
  async updateById(id, data) {
    return await Book.findByIdAndUpdate(id, data, { new: true });
  },
  async deleteById(id) {
    return await Book.findByIdAndDelete(id);
  },
};

module.exports = BookRepository;
