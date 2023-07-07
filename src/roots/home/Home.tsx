import { useNavigate } from 'react-router-dom';

import Button from '~/components/ui/button/Button';
import HomeImages from '~/components/features/home-images/HomeImages';

import { StyledHomeContainer } from './StyledHome';

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateToRecipes = () => {
    navigate('recipes')
  }

  return (
    <StyledHomeContainer>
      <article>
        <h1>Say hello to wonderful recipes with Yummy!</h1>
        <p>From now on your favorite cookbook</p>
        <Button $style="normal" onClick={handleNavigateToRecipes}>Let's get it started</Button>
      </article>
      <HomeImages />
    </StyledHomeContainer>
  );
};

export default Home;
