import styles from './mission.module.css';
import { BsArrowDown } from "react-icons/bs";

const Mission=()=>{

    return(
        <>
        <div className={`${styles["mission"]}`}>
            <div className="titlebtn">Our mission</div>
            <ul>
                <li>we propel&nbsp;<span>Businesses</span></li>
                <li>With Impactful Edits, Strategic Ads,</li>
                <li>Powerful Web Presence & </li>
                <li><span>Social Mastery.</span></li>
            </ul>
            <p>First impressions matter. That's why our mission is to create clean, enduring designs that elevate. First impressions matter. That's why our mission.</p>
        <span className={`${styles["downarrow"]}`}><BsArrowDown style={{  transform:"scaleX(0.7)" }}/>
</span>

        </div>
        
        </>
        
    );
}   
export default Mission;    