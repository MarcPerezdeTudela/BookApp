import { createStore } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { Book } from '@/domain/models/Book';
import { SearchParams } from '@/domain/models/SearchParams';
import { BookService } from '@/domain/services/BookService';
import { BookRepository } from '@/infrastructure/repositories/BookRepository';

export interface GlobalStoreProps {
    booksToRead: Book[];
    searchParams: SearchParams;
    bookService: BookService;
}

export interface GlobalStoreState extends GlobalStoreProps {
    addBookToRead: (book: Book) => void;
    removeBookToRead: (book: Book) => void;
    setSearchParams: (params: SearchParams) => void;
}
export type GlobalStore = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (initProps?: Partial<GlobalStoreProps>) => {
    const DEFAULT_PROPS: GlobalStoreProps = {
        booksToRead: [],
        searchParams: { title: '', genres: [] } as SearchParams,
        bookService: new BookService(new BookRepository())
    };
    return createStore<GlobalStoreState>()(
        persist(
            subscribeWithSelector(set => ({
                ...DEFAULT_PROPS,
                ...initProps,
                addBookToRead: (book: Book) => set(state => ({ booksToRead: [...state.booksToRead, book] })),
                removeBookToRead: (book: Book) => set(state => ({ booksToRead: state.booksToRead.filter(b => b.ISBN !== book.ISBN) })),
                setSearchParams: (params: SearchParams) => set({ searchParams: params })
            })),
            {
                name: 'globalStore',
                partialize: state => ({ booksToRead: state.booksToRead })
            }
        )
    );
};
