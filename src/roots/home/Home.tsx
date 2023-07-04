import Button from '~/components/ui/button/Button';
import HomeImages from '~/components/features/home-images/HomeImages';

import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Home = () => {
  const navigate = useNavigate()

  const handleNavigateToRecipes = useCallback(() => {
    navigate('recipes')
  }, [])

  return (
    <section className={styles['home-page-container']}>
      <article>
        <h1>Say hello to wonderful recipes with Yummy!</h1>
        <p>From now on your favorite cookbook</p>
        <Button $style="normal" onClick={handleNavigateToRecipes}>Let's get it started</Button>
      </article>
      <HomeImages />
    </section>
  );
};

export default Home;
