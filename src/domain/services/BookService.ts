import { IBookRepository } from '@/domain/repositories/IBookRepository';
import { Book } from '@/domain/models/Book';
import Fuse from 'fuse.js';

export class BookService {
    private bookRepository: IBookRepository;
    constructor(bookRepository: IBookRepository) {
        this.bookRepository = bookRepository;
    }
    getBooks() {
        return this.bookRepository.getBooks();
    }
    filterByTitle(books: Book[], title: string) {
        const options = {
            keys: ['title']
        };
        const fuse = new Fuse(books, options);
        return fuse.search(title);
    }
}
