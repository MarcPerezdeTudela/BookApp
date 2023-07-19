import { createContext } from 'react';
import { GlobalStore } from 'src/store/globalStore';

export const GlobalContext = createContext<GlobalStore>({} as GlobalStore);
