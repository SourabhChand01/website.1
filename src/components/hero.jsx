import styles from './hero.module.css';
import { FiArrowDownRight } from "react-icons/fi";

const Hero = () => {
  return (
   <>
   <div className={`${styles["hero"]}`}>
   <div className={`${styles["status"]}`}>
        <div className={`${styles["status1"]}  ${styles["breathing"]}`}>
            <div className={`${styles["outer"]}`}>
                <div className={`${styles["inner"]}`}></div>
            </div>
       </div>
        <div className={`${styles["status2"]}`}>
            <p>Available Now</p>
       </div>
       </div>
    <div className={`${styles["heroText"]}`}>
        <p className={`${styles["name"]}`}>COMPETENT MEDIA</p>
        <p className={`${styles["line1"]}`}>Beyond ✦ Limits. </p>
       <p className={`${styles["line2"]}`}>from Edits to Ads.
</p>
         <p className={`${styles["line3"]}`}>Design services at your fingertips </p>
       </div>
       <div className={`${styles["learnmore"]}`}>Learn More <span className={`${styles["arrow"]}`}><FiArrowDownRight />
</span>
       </div>
       </div>
   </>
  );
}
export default Hero;