import { FC, ReactElement } from 'react';

import { AddIcon } from '../../assets/icons/add-icon.tsx';
import { ChartIcon } from '../../assets/icons/chart-icon.tsx';
import { UserIcon } from '../../assets/icons/user-icon.tsx';

import styles from './navigation.module.scss';

interface INavigationButtons {
  icon: ReactElement;
  callbackName: keyof INavigationProps;
}

export interface INavigationProps {
  onChart: () => void;
  onAdd: () => void;
  onUser: () => void;
}

const navigationButtons: INavigationButtons[] = [
  { icon: <ChartIcon />, callbackName: 'onChart' },
  { icon: <AddIcon />, callbackName: 'onAdd' },
  { icon: <UserIcon />, callbackName: 'onUser' },
];

export const Navigation: FC<INavigationProps> = (props) => (
  <div className={styles.wrapper}>
    {navigationButtons.map(({ icon, callbackName }) => (
      <button className={styles.btn} onClick={props[callbackName]}>
        {icon}
      </button>
    ))}
  </div>
);
