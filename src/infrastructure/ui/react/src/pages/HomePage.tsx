import { SearchBar } from '@/components/SearchBar';
import { BooksGrid } from '@/components/BooksGrid';
import { GenreSelector } from '@/components/GenreSelector';
import { useGlobalContext } from '@/hooks/useGlobalContext';

export const HomePage = () => {
    const books = useGlobalContext(store => store.bookService.getBooks());
    const searchParams = useGlobalContext(store => store.searchParams);
    const filteredBooks = useGlobalContext(store => store.bookService.filterBooks(books, searchParams));
    const booksToRead = useGlobalContext(store => store.booksToRead);

    return (
        <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-full w-full'>
            <SearchBar />
            <GenreSelector />
            <h2 className='text-3xl font-bold text-center text-white'>Books to read</h2>
            <BooksGrid books={booksToRead} />
            <h2 className='text-3xl font-bold text-center text-white'>Books: {filteredBooks.length}</h2>
            <BooksGrid books={filteredBooks} />
        </div>
    );
};
