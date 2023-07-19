import { useContext } from 'react';
import { useStore } from 'zustand';
import { GlobalContext } from '@/context/globalContext';
import { SearchBar } from '@/components/SearchBar';
import { BooksGrid } from '@/components/BooksGrid';

export const HomePage = () => {
    const store = useContext(GlobalContext);
    const books = useStore(store, s => s.bookService.getBooks());
    return (
        <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-full w-full'>
            <SearchBar />
            <BooksGrid books={books} />
        </div>
    );
};
