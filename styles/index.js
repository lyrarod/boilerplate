import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      *,
      ::before,
      ::after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
      }
    `}
  />
)
