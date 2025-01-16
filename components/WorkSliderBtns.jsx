import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";
const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <FaChevronLeft size={'2rem'} color="black" className={iconStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <FaChevronRight size={'2rem'} color="black" />
            </button>

        </div>
    );
};

export default WorkSliderBtns;

