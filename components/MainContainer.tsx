import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Stack, Button } from '@mui/material';

const MainContainer = ({ children, title }: { children: React.ReactElement; title: string }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <section>
        <Stack spacing={2} direction="row">
          <Link href="/"><Button variant="outlined">Home</Button></Link>
          <Link href="/svg"><Button variant="outlined">Svg modal</Button></Link>
        </Stack>
      </section>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer
