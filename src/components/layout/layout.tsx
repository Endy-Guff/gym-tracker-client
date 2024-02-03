import { FC, PropsWithChildren } from 'react';

import { INavigationProps, Navigation } from '../navigation';

import styles from './layout.module.scss';

type ILayoutProps = INavigationProps;

export const Layout: FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  ...rest
}) => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      {children}
      <Navigation {...rest} />
    </div>
  </div>
);
