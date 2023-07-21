import { IBookRepository } from '@/domain/repositories/IBookRepository';
import { Book } from '@/domain/models/Book';
import { SearchParams } from '@/domain/models/SearchParams';

export class BookService {
    private bookRepository: IBookRepository;
    constructor(bookRepository: IBookRepository) {
        this.bookRepository = bookRepository;
    }
    getBooks() {
        return this.bookRepository.getBooks();
    }
    filterByTitle(book: Book, title: string) {
        if (!title) return book;
        return book.title.toLowerCase().includes(title.toLowerCase());
    }
    filterByGenre(book: Book, genres: string[]) {
        if (!genres.length) return book;
        return genres.some(genre => book.genre.includes(genre));
    }
    filterBooks(books: Book[], searchParams: SearchParams) {
        return books.filter(book => this.filterByTitle(book, searchParams.title) && this.filterByGenre(book, searchParams.genres));
    }
}
