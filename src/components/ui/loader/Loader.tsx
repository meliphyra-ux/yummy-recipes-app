import { styled } from 'styled-components'

import { colors, spinAnimation } from '~/utils/_mixins'

const StyledLoaderContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.accent};

  .loader {
    width: 75px;
    height: 75px;

    border-bottom: 2px solid ${colors.secondary};
    border-radius: 50%;
  
    animation-name: spin;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    ${spinAnimation}
  }
`

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <div className='loader'></div>
    </StyledLoaderContainer>
  )
}

export default Loader