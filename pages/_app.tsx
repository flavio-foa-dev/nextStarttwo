import React from 'react'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <style>
        {
          `
          body {
            font-family: sans-serif;
            color: gray
          }
          `
        }


      </style>
      <Component {...pageProps} />
    </>
  )
}
