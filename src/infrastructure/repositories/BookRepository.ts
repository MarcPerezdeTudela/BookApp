import { Book } from '@/models';
import { IBookRepository } from '@/repositories/IBookRepository';
import data from '@/mocks/books.json';

export const bookRepository: IBookRepository = {
    getBooks: () => {
        return data.library.map(({ book }) => book as Book);
    }
};
