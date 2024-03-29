import styled from 'styled-components';

const StyledRecipeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;

  gap: 30px;
`;

export default StyledRecipeCards;
