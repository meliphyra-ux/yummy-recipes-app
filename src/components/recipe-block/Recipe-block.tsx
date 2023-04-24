import { FC } from 'react';
import { Recipe } from '../../utils/types';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import styles from './recipe-block.module.scss';

const RecipeBlock: FC<Recipe> = ({ thumbnail_url, name, description }) => {
  return (
    <article className={styles['recipe-block-container']}>
      <div className={styles['recipe-image-container']}>
        <LazyLoadImage
          src={thumbnail_url}
          alt={name}
          placeholderSrc="./while-loading.webp"
        />
      </div>
      <div className={styles['recipe-information-container']}>
      <img
        className={styles.illustration}
        src="https://illustrations.popsy.co/amber/chef-serving-food.svg"
        alt="Chef serving food"
        title="Let's get it started"
      />
        <h3>{name}</h3>
        {description && (
          <p>{description.split(' ').slice(0, 8).join(' ') + '...'}</p>
        )}
      </div>
    </article>
  );
};

export default RecipeBlock;
