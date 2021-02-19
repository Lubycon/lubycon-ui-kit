import React, { ReactNode } from 'react';
import { CombineElementProps } from 'src/types/utils';
import classnames from 'classnames';

type Props = CombineElementProps<
  'div',
  {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
  }
>;
const Navigation = ({ left, center, right, className, ...props }: Props) => {
  return (
    <header className={classnames('lubycon-navigation', className)} {...props}>
      <div className="lubycon-navigation__left-section">{left}</div>
      <nav className="lubycon-navigation__center-section">{center}</nav>
      <div className="lubycon-navigation__right-section">{right}</div>
    </header>
  );
};

export default Navigation;
