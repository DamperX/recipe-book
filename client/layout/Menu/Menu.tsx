import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext);
  const router = useRouter();

  console.log(router);

  const renderMenu = () => {
    return (
      <div>
        {menu.map((menuItem) => (
          <div key={menuItem._id}>
            <Link href={`/type/${menuItem.alias}`}>
              <a>{menuItem.title}</a>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderMenu()}</div>;
};
