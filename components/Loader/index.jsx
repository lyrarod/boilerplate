import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Loader = ({ size, color, bgColor }) => {
  return (
    <Container>
      <BgLoading size={size} bgColor={bgColor}>
        <Loading
          // as={motion.div}
          size={size}
          color={color}
          animate={{ rotate: 360 }} // 360
          transition={{
            duration: 1,
            repeat: Infinity,
            // repeatType: 'reverse', // loop, reverse, mirror
            // ease: 'linear', // easeInOut, linear
            // type: 'spring', // tween, spring
            // bounce: 0.25,
            // damping: 300,
            // mass: 0.5,
            // stiffness: 50,
            // velocity: 2,
            // restSpeed: 0.5,
            // restDelta: 0.5,
            // from: 90,
          }}
        />
      </BgLoading>
    </Container>
  )
}

Loader.defaultProps = {
  size: 50,
  color: 'white',
  bgColor: 'transparent',
}

const Container = styled.div({
  minWidth: '100vw',
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
})

const BgLoading = styled.div`
  border-radius: 100%;

  ${({ size, bgColor }) => `
      background: ${bgColor};
      padding: ${(size * 40) / 100}px;
      box-shadow: 0 0 ${(size * 10) / 100}px rgba(0, 0, 0, 0.3);
  `}// Exemplo usando template string sem return
  
  
  
  //Exemplo 1 retornando o obj direto
  /* ${(props) => ({
    background: props.bgColor,
    padding: `${(props.size * 30) / 100}px`,
    boxShadow: `0 0 ${(props.size * 10) / 100}px rgba(0, 0, 0, 0.3)`,
  })} */

  // Exemplo 2 retornando template string
  /* ${({ size, bgColor }) => {
    return `
      background: ${bgColor};
      padding: ${(size * 30) / 100}px;
      box-shadow: 0 0 ${(size * 10) / 100}px rgba(0, 0, 0, 0.3);
  `
  }} */
`

const Loading = styled(motion.div)`
  ${({ size, color }) => `
      width: ${size}px;
      height: ${size}px;
      border-width: ${(size * 5) / 100}px;
      border-color: ${color};
    `}

  /* width: ${({ size }) => `${size}px`}; */
  /* height: ${({ size }) => `${size}px`}; */
  /* border-width: ${({ size }) => `${(size * 10) / 100}px`}; */
  /* border-color: ${({ color }) => color}; //#e8e8e8 */
  /* border-left-color: transparent; */
  border-right-color: transparent;
  border-radius: 100%;
  border-style: solid;
  background: transparent;
`

// Need props as={motion.div} in component
// const Loading = styled.div(({ size, color }) => ({
//   width: `${size}px`,
//   height: `${size}px`,
//   borderWidth: `${(size * 8) / 100}px`,
//   borderColor: color, //#e8e8e8
//   borderLeftColor: 'transparent',
//   borderRightColor: 'transparent',
//   borderRadius: '50%',
//   borderStyle: 'solid',
// }))

export default Loader
