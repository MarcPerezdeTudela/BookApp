import { GlobalContext } from '@/context/globalContext';
import { createGlobalStore } from '@/store/globalStore';
import { HomePage } from '@/pages/HomePage';
import { share } from 'shared-zustand';

function App() {
    const store = createGlobalStore();
    share('booksToRead', store);

    return (
        <GlobalContext.Provider value={store}>
            <HomePage />
        </GlobalContext.Provider>
    );
}

export default App;
