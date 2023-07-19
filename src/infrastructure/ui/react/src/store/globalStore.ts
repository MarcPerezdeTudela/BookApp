import { createStore } from 'zustand';
import { BookService } from '@/domain/services/BookService';
import { BookRepository } from '@/infrastructure/repositories/BookRepository';

export interface GlobalStoreProps {
    bookService: BookService;
}

export type GlobalStore = ReturnType<typeof createGlobalStore>;

export const createGlobalStore = (initProps?: Partial<GlobalStoreProps>) => {
    const DEFAULT_PROPS: GlobalStoreProps = {
        bookService: new BookService(new BookRepository())
    };
    return createStore<GlobalStoreProps>()(() => ({
        ...DEFAULT_PROPS,
        ...initProps
    }));
};
