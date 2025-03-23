/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },

    {
        name: "Skills",
        path: "/skills"
    },
    {
        name: "Services",
        path: "/services"
    },

    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Blogs",
        path: "/blogs"
    },
]

const Nav = () => {
    const pathname = usePathname();

    return (

        <nav className="">
            <ul className=" flex gap-10">
                <li className=" flex-col items-center flex"><Link href="/" className={`${"/" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium  hover:text-accent transition-all  flex-col items-center flex`}>
                    <img src={"/assets/navIcon/home-unscreen.gif"} width={30} height={50}></img> <h2>Home</h2> </Link></li>
                <li className=""><Link href="/about" className={`${"/about" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all flex-col items-center flex`}>
                    <img src={"/assets/navIcon/about.gif"} width={30} height={50}></img> <h2>About</h2>  </Link></li>
                <li className="  "><Link href="/skills" className={`${"/skills" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all flex flex-col items-center `}> <div>
                    <img src={"/assets/navIcon/skill.gif"} width={30} height={50}></img>
                </div>
                    <div>
                        <h2>Skills</h2>
                    </div>
                </Link></li>
                <li className="  "><Link href="/services" className={`${"/services" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all flex flex-col items-center `}> <div>
                    <img src={"/assets/navIcon/service.gif"} width={30} height={50}></img>
                </div>
                    <div>
                        <h2>Services</h2>
                    </div>
                </Link></li>
                <li><Link href="/blogs" className={`${"/blogs" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all  flex-col items-center flex`}>
                <img src={"/assets/navIcon/blog.gif"} width={30} height={50}></img>Blogs </Link></li>
                <li><Link href="/projects" className={`${"/projects" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all  flex-col items-center flex`}>
                    <img src={"/assets/navIcon/project.gif"} width={30} height={50}></img> <h2>Projects</h2> </Link></li>
                <li><Link href="/contact" className={`${"/contact" === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all  flex-col items-center flex`}>
                    <img src={"/assets/navIcon/contact.gif"} width={30} height={50}></img>Contact </Link></li>


            </ul>
        </nav>


    );
};

export default Nav;