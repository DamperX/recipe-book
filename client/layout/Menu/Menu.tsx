import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import {
  MenuItem,
  PageItem,
  TopLvlMenuItem,
} from '../../interfaces/menu.interface';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLvlMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const renderFirstLvl = () => {
    return (
      <>
        {firstLvlMenu.map((m) => (
          <div key={m.route} className="p-3.5 my-3.5 bg-cyan-300">
            <a
              href={`/${m.route}`}
              className={cn(
                'inline-block',
                'text-lg',
                'text-neutral-800',
                'font-bold',
                'p-4',
                {
                  underline: m.id === firstCategory,
                  'underline-offset-4': m.id === firstCategory,
                  'decoration-4': m.id === firstCategory,
                }
              )}
            >
              {m.name}
            </a>
            {m.id === firstCategory && renderSecondLvl(m)}
          </div>
        ))}
      </>
    );
  };

  const renderSecondLvl = (parentMenu: TopLvlMenuItem) => {
    return (
      <div>
        {menu.map((menuItem: MenuItem) => {
          return (
            <div key={menuItem._id.secondCategory}>
              <div
                className={cn(
                  'text-neutral-800',
                  'font-bold',
                  'pb-2',
                  'pl-1',
                  'cursor-pointer'
                )}
              >
                {menuItem._id.secondCategory}
              </div>
              <div>{renderThirdLvl(menuItem.pages, parentMenu.route)}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderThirdLvl = (pages: PageItem[], route: string) => {
    return (
      <ul>
        {pages.map((page) => (
          <li key={page._id}>
            <Link href={`/${route}/${page.alias}`}>
              <a
                className={cn(
                  'inline-block',
                  'mx-0.5',
                  'py-0.5',
                  'text-neutral-800',
                  'hover:text-rose-600',
                  {
                    'text-rose-700':
                      `/${route}/${page.alias}` === router.asPath,
                  }
                )}
              >
                {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderFirstLvl()}</div>;
};
