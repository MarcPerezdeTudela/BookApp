import { useGlobalContext } from '@/hooks/useGlobalContext';
import { ChangeEvent } from 'react';

type Props = {
    genre: string;
};

export const GenreItem = ({ genre }: Props) => {
    const searchParams = useGlobalContext(store => store.searchParams);
    const setSearchParams = useGlobalContext(store => store.setSearchParams);

    const handleOnCheckOption = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setSearchParams({ ...searchParams, genres: [...searchParams.genres, value] });
        } else if (!checked) {
            const selectedGenres = searchParams.genres.filter(genre => genre !== value);
            setSearchParams({ ...searchParams, genres: selectedGenres });
        }
    };

    return (
        <div className='flex items-center mb-4'>
            <input
                id='default-checkbox'
                type='checkbox'
                value={genre}
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                onChange={handleOnCheckOption}
            />
            <label htmlFor='default-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                {genre}
            </label>
        </div>
    );
};
