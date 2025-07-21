import styles from './works.module.css';
const Work=()=>{
    return(
        <>
        <div className={`${styles["work"]}`} >
            <div className="titlebtn">
                Work That Make Us Proud
            </div>
            <p className={`${styles["title"]}`}>Recent Works, Notable Impact</p>
            <div className={`${styles["worlDetails"]}`}>
                <div className={`${styles["workTexts"]}`}></div>
                <div className={`${styles["workPic"]}`}></div>
            </div>
        </div>
        </>
        
    );
}   
export default Work;    