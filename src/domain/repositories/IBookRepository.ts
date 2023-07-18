import { Book } from '@/models';

export interface IBookRepository {
    getBooks: () => Book[];
}
