import { Book } from '@/models';
interface Props {
    books: Book[];
}
export const BooksGrid = ({ books }: Props) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center'>
            {books.map(book => (
                <a
                    href='#'
                    key={book.ISBN}
                    className='flex flex-col items-center bg-white border border-gray-200 h-full max-w-full rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
                >
                    <img
                        className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                        src={book.cover}
                        alt=''
                    />
                    <div className='flex flex-col justify-between p-4 leading-normal grow'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{book.title}</h5>
                        <h6 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{book.author?.name}</h6>
                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{book.synopsis}</p>
                        <button
                            type='button'
                            className='w-24 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                        >
                            Read
                        </button>
                    </div>
                </a>
            ))}
        </div>
    );
};
