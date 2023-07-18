import { IBookRepository } from '../repositories/IBookRepository';

export const bookService = (bookRepository: IBookRepository) => ({
    getBooks: () => {
        return bookRepository.getBooks();
    }
});
