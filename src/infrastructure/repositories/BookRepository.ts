import { Book } from '@/models';
import { IBookRepository } from '@/repositories/IBookRepository';
import data from '@/mocks/books.json';

export class BookRepository implements IBookRepository {
    getBooks() {
        return data.library.map(({ book }) => book as Book);
    }
}
