import Button from '~/components/ui/button/Button';
import HomeImages from '~/components/features/home-images/HomeImages';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles['home-page-container']}>
      <article>
        <h1>Say hello to wonderful recipes with Yummy!</h1>
        <p>From now on your favorite cookbook</p>
        <Button $style="normal">Let's get it started</Button>
      </article>
      <HomeImages />
    </section>
  );
};

export default Home;
