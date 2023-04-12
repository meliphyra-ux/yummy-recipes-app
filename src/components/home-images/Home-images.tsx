import styles from './home-images.module.scss';
import SaladBowl from '../../assets/images/salad-bowl.webp';
import Burger from '../../assets/images/burger.webp';

const HomeImages = () => {
  return (
    <aside className={styles['images-container']}>
      <img
        id='first'
        src={SaladBowl}
        alt="Salad bowl"
        width={450}
        height={450}
      />
      <img id='second' src={Burger} alt="Burger" width={300} height={300} />
    </aside>
  );
};

export default HomeImages;
