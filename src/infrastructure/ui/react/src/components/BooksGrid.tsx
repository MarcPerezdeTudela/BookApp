import { Book } from '@/domain/models/Book';
import { BookCard } from '@/components/BookCard';

interface Props {
    books: Book[];
}
export const BooksGrid = ({ books }: Props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center'>
            {books.map(book => (
                <BookCard key={book.ISBN} book={book} />
            ))}
        </div>
    );
};
