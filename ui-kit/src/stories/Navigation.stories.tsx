import React from 'react';
import { Navigation } from 'src';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Lubycon UI Kit/Navigation',
} as Meta;

export const Default = () => {
  return <Navigation left="Left" center="Center" right="Right" />;
};
