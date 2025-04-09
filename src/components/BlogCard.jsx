import styles from './BlogCard.module.css';
import ShareButton from './ShareButton';
import AuthorInfo from './AuthorInfo';
import GreenDrawer from '../../images/drawers.jpg'
const BlogCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        {/* <img src={GreenDrawer} alt="Drawer"></img> */}
      </div>
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h1>
        <p className={styles.cardText}>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
        </p>
        <div className={styles.cardFooter}>
          <AuthorInfo />
          <ShareButton />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;