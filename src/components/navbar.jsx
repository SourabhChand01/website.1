import styles from './navbar.module.css';
import { FaGripLines } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa6";

const Navbar=()=>{
return(
    <>
    <div className={`${styles["navcontainer"]}`}>
    <div className={`${styles["navbar"]}`}>
        <div className={`${styles["navbarLeft"]}`}>
            <img src='https://framerusercontent.com/images/lYrV0qxAJhdk9Wru1Ef1f988qoQ.png' alt='logo' style={{width:"120px",height:"70%"}}/>        
        </div>
        <div className={`${styles["navbarRight"]}`}>
            <ul>
                <li><a href="#">Why Us</a></li>
               <li><a href="#">Mission</a></li>
               <li><a href="#">Works</a></li>
               <li><a href="#">Services</a></li>
               <li className={`${styles["pages"]}`}><a href="#">Pages</a> <FaChevronDown />
</li>
</ul>
        </div>
<span className={`${styles["menu"]}`} ><FaGripLines />
</span>
            
    </div></div>
    </>
)
}
export default Navbar;