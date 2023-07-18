import styled from "styled-components";
import { colors } from "~/utils/_mixins";

const StyledPaginationContainer = styled.div`

  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);

  border: 1px solid ${colors.accent};
  border-radius: 0.25rem;
  background-color: ${colors.secondary};

  width: fit-content;
  height: fit-content;
  button{
    width: 50px;
    height: 50px;

    border-radius: inherit;
  }
`;

export default StyledPaginationContainer;