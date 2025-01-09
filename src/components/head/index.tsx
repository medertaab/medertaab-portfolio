import React from 'react'
import Head from 'next/head'

export default function HeadComponent() {
  return (
    <Head>
      <title>MEDER TAAB</title>
      <meta name="description" content="Meder Taab, frontend developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preload" href="/fonts/PlusJakartaSans-VariableFont_wght.ttf" as="font" type="font/ttf"></link>
    </Head>
  )
}
