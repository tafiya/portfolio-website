"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Blogs",
        path: "/blogs"
    },
  
    {
        name: "Contact",
        path: "/contact"
    },
]
const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className=" flex justify-center items-center">
                <CiMenuFries className=" text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div >logo</div>
                <nav className="flex flex-col justify-center items-center gap-8">

                    {links.map((link, index) => {
                        return (
                            <Link href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                    } text - xl capitalize hover: text - accent transition - all`}>
                                {link.name}
                            </Link>
                        );

                    })}
                </nav>
            </SheetContent>
        </Sheet >
    );
};

export default MobileNav;