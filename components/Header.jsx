"use-client"
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
    return (
        <header className='xl:py-0 fixed bottom-0 w-full z-20 shadow-lg'>
            <div className='bg-[#ffffff] py-2 mx-auto hidden xl:flex justify-center items-center'>
                {/* Desktop Nav & Hire Me Button */}
                <div className='hidden xl:flex items-center text-black gap-8'>
                    <Nav />
                </div>
                {/* Mobile Nav */}

            </div>
            <div className="xl:hidden flex items-center justify-center bg-black  text-black shadow-lg shadow-accent">
                {/* Here, you can add a mobile menu icon (e.g., a hamburger menu) */}
                <div className=' bg-black p-2 rounded-full hover:border-2 hover:shadow-lg hover:shadow-accent border-accent'>
                    <MobileNav></MobileNav>
                </div>

            </div>
        </header>
    );
};

export default Header;