import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopCategory.Recipes,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [stateMenu, setStateMenu] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setStateMenu(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: stateMenu, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
