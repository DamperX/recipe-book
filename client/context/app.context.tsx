import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';

export interface IAppContext {
  menu: MenuItem[];
}

export const AppContext = createContext<IAppContext>({
  menu: [],
});

export const AppContextProvider = ({
  menu,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [categoriesMenu] = useState<MenuItem[]>(menu);

  return (
    <AppContext.Provider value={{ menu: categoriesMenu }}>
      {children}
    </AppContext.Provider>
  );
};
