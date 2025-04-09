import styles from './AuthorInfo.module.css';
import AuthorImage from '../../images/avatar-michelle.jpg'

const AuthorInfo = () => {
  return (
    <div className={styles.author}>
      <div className={styles.authorAvatar}>
        {/* <img src={AuthorImage} alt='author'></img> */}
      </div>
      <div className={styles.authorDetails}>
        <p className={styles.authorName}>Michelle Appleton</p>
        <p className={styles.authorDate}>28 Jun 2020</p>
      </div>
    </div>
  );
};

export default AuthorInfo;