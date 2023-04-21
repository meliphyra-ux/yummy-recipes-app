import styles from './home-images.module.scss';

const HomeImages = () => {
  return (
    <aside className={styles['images-container']}>
      <img
        src="https://illustrations.popsy.co/white/cooking-soup.svg"
        alt="Cooking soup from Popsy.co"
        width={225}
        height={225}
      />
      <img
        src="https://illustrations.popsy.co/white/woman-eating-salad.svg"
        alt="Woman eating salad from Popsy.co"
        width={200}
        height={200}
      />
      <img
        src="https://illustrations.popsy.co/white/chef-serving-chicken.svg"
        alt="Chef serving chicken from Popsy.co"
        width={200}
        height={200}
      />
    </aside>
  );
};

export default HomeImages;
