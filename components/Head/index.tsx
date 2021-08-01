import React, { FC } from 'react';

import Head from 'next/head';

interface Props {
  title: String;
}

export const PageHead: FC<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
