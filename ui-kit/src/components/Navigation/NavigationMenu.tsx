import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

const NavigationMenu = ({ children, className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={classnames('lubycon-navigation__menu', className)} {...props}>
      {children}
    </ul>
  );
};

export default NavigationMenu;
