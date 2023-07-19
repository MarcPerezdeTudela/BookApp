import { useRef } from 'react';
import { GlobalContext } from './context/globalContext';
import { createGlobalStore } from './store/globalStore';
import { HomePage } from './pages/HomePage';

function App() {
    const store = useRef(createGlobalStore()).current;
    return (
        <GlobalContext.Provider value={store}>
            <HomePage />
        </GlobalContext.Provider>
    );
}

export default App;
