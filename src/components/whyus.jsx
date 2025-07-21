import styles from './whyus.module.css';
const Whyus=()=>{
    const listItems = [{"img":"https://framerusercontent.com/images/1G5hG6nfNOc5neEFlOeUN7jyu9o.png?scale-down-to=512","title":"video Editing","content":"Transform your raw footage into compelling stories. We craft edits that reflect your brand’s voice, maintain narrative flow, and engage your audience — making you stand out in the crowded marketplace."},
        {"img":"https://framerusercontent.com/images/l2IU2RqzzxzzyquRCfQbAHHRQ.jpg?scale-down-to=512","title":"Website development ","content":"Build fast, responsive, and beautifully designed websites that elevate your brand. We focus on seamless user experiences and strong visual identity, ensuring your site performs — and connects."},
        {"img":"https://framerusercontent.com/images/9vWJkKedHtpO8fXQceiH3mmA1gg.png?scale-down-to=512","title":"meta ads","content":"Maximize your ROI with precisely targeted Meta (Facebook & Instagram) ads. From strategy to execution, we deliver campaigns that convert, along with real-time performance tracking and post-campaign support."}
    ];
    return(
        <>
        <div className={`${styles["whyus"]}`}>
            <span className={`${styles["whyusbtn"]}`}>Why us</span>
            <div className={`${styles["whyusheading"]}`}><p>Experience the Benefits</p> 
                        <p>of Our Expertise</p>
                        </div>
            <p className={`${styles["whyus-text"]}`}>That drives impactful gain powerful results</p>
            
            <div className={`${styles["whyuslist"]}`}>
                {listItems.map((item, index) => (
                    <div key={index} className={`${styles["whyuslist-item"]}`}>
                        <img src={item.img} alt={item.title} className={`${styles["whyuslist-item-img"]}`} />
                        <h3 className={`${styles["whyuslist-item-title"]}`}>{item.title}</h3>
                        <p className={`${styles["whyuslist-item-content"]}`}>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
        
    );
}
export default Whyus;