import Head from 'next/head'
import styled from '@emotion/styled'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <>
      <Section>
        <Head>
          <title>
            Boilerplate NextJS | Styled Components | Framer Motion | React Icons
          </title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Loader
          // size={100}
          color={'green'}
          // bgColor={'red'}
          // Comments
        />
      </Section>

      <Section bgColor={'rebeccapurple'}>
        <Loader
          size={100}
          color={'rebeccapurple'}
          // bgColor={'crimson'}
          // Comments
        />
      </Section>
    </>
  )
}

const Section = styled.section`
  height: 100vh;
  overflow: hidden;
  /* background: radial-gradient(circle, lightblue, blue); */

  ${(props) => `
    background: radial-gradient(circle, whitesmoke, ${props.bgColor});
  `}
`

Section.defaultProps = {
  bgColor: 'green',
}

export default Home
