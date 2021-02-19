import React from 'react';
import classnames from 'classnames';

interface Props {
  foo: string;
}
const NavigationMenuItem = ({ ...props }: Props) => {
  return <div className={classnames('lubycon-navigation__menu__item')} />;
};

export default NavigationMenuItem;
