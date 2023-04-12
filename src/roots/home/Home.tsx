import Button from '../../components/button/Button';
import HomeImages from '../../components/home-images/Home-images';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles['home-page-container']}>
      <article>
        <h1>Say hello to wonderful recipes with Yummy!</h1>
        <p>From now on your favorite cookbook</p>
        <Button variant="normal">Let's get it started</Button>
      </article>
      <HomeImages />
    </section>
  );
};

export default Home;
