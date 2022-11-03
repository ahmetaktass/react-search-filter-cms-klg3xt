import React from 'react';
import { HiOutlineHeart, HiAdjustments } from 'react-icons/hi';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ className, item }) => {
  return (
    <div className={cn(styles.card, className)} aria-hidden="true">
      <div className={styles.preview}>
        <img
          src={`${item?.metadata?.image?.imgix_url}?w=600&format=auto`}
          alt="Card"
        />
        <div className={styles.control}>
          <div className={styles.category}>{item?.title}</div>
          <button className={cn('button-small', styles.button)}>
            <span>{`${item?.metadata?.categories[0]?.title}`}</span>
            <HiAdjustments name="scatter-up" size="16" />
          </button>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.status}>
          <p>{item?.title}</p>
          <p className={styles.count}>
            {item?.metadata?.count > 0
              ? `${item?.metadata?.count} Items`
              : 'Not Available'}
          </p>
        </div>
        <div
          className={styles.bid}
          dangerouslySetInnerHTML={{ __html: item?.count }}
        />
        <span className={styles.price}>{`$ ${item?.metadata?.price}`}</span>
      </div>
    </div>
  );
};

export default Card;
