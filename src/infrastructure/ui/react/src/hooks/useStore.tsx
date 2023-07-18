import { create } from 'zustand';
import { Book } from '@/models';
import { bookService } from '@/services/BookService';
import { bookRepository } from '@/repositories/BookRepository';

type Store = {
    books: Book[];
    remove: (book: Book) => void;
};
export const useStore = create<Store>()(set => ({
    books: bookService(bookRepository).getBooks(),
    remove: (book: Book) => set(state => ({ books: state.books.filter(({ ISBN }) => ISBN !== book.ISBN) }))
}));
