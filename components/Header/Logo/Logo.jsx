import React from 'react';

import Link from 'next/link';

import { useStyles } from './styles';

export const Logo = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Link href="/">
        <a className={styles.link} href="/">
          <img className={styles.icon} src="/images/logo.png" alt="Image Stock" />
          <span className={styles.label}>imageStock</span>
        </a>
      </Link>
    </div>
  );
};
