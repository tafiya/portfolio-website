import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const socials = [
    { icon: <FaGithub size={'1.6rem'} />, path: "https://github.com/tafiya" },
    { icon: <FaFacebook size={'1.6rem'} />, path: "https://www.facebook.com/tafiyapinkey/" },
    { icon: <FaLinkedin size={'1.6rem'} />, path: "https://www.linkedin.com/in/tafiyatuljannat/" },

]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return (< Link key={index} href={item.path} className={iconStyles} >{item.icon}</Link>);
                })
            }

        </div>
    );
};

export default Social;