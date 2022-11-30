import Image from 'next/image';
import styles from './hover-image-card.module.css';

const HoverImageCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <p>Next JS Path</p>
          <p>18-8-2022</p>
          <button className={styles.btn}>More Details</button>
        </div>
        {/*Change with Next Image*/}
        <Image src="/images/image-one.jpg" alt="text" />
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <p>Text 1</p>
          <p>Text 2</p>
          <button className={styles.btn}>Button Text</button>
        </div>
        {/*Change with Next Image*/}
        <Image src="/images/image-one.jpg" alt="text" />
      </div>
      <div className={styles.card}>
        <div className={styles.content}>
          <p>Text 1</p>
          <p>Text 2</p>
          <button className={styles.btn}>Button Text</button>
        </div>
        {/*Change with Next Image*/}
        <Image src="/images/image-one.jpg" alt="text" />
      </div>
    </div>
  );
};

export default HoverImageCard;
