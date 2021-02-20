import { globalStyles } from '../styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
