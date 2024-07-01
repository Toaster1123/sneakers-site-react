import React from 'react';
import styles from './Card.module.scss';

function Card({ onFavorite, title, imageUrl, price, onPlus }) {
  const [added, setAdded] = React.useState(false);

  const handlePlus = () => {
    onPlus({ title, imageUrl, price });
    setAdded(!added);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/pic/unliked.svg" onClick={onFavorite} />
      </div>
      <img src={imageUrl} height={112} width={133} />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardContent}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handlePlus}
          src={added ? '/pic/btn-checked.svg' : '/pic/btn-plus.svg'}
        />
      </div>
    </div>
  );
}

export default Card;
