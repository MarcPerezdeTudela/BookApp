import { GenreItem } from '@/components/GenreItem';
import { useGlobalContext } from '@/hooks/useGlobalContext';

export const GenreSelector = () => {
    const books = useGlobalContext(store => store.bookService.getBooks());
    const differentGenres = books.map(book => book.genre).filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div>
            {differentGenres.map(genre => (
                <GenreItem key={genre} genre={genre} />
            ))}
        </div>
    );
};
