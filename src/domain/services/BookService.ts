import { IBookRepository } from '@/repositories/IBookRepository';
import { Book } from '@/models';
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
