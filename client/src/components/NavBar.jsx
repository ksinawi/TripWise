const NavBar = () => {
    return (
        <nav className="bg-white w-full fixed top-0 left-0 z-[1000] shadow-md px-[5%] py-4 flex justify-between items-center">
            <a href="#" className="logo">
                <img src="./images/logo.png" alt="Website Logo" className="w-auto h-15"></img>
            </a>

            <ul className="flex gap-[25px] list-none">
                <li><a href="#discover" className="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Discover</a></li>
                <li><a href="#" className="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Plan</a></li>
                <li><a href="#" className="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Chat-Bot</a></li>
                <li><a href="#" className="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">About Us</a></li>
            </ul>

            <button type="button" className="text-white bg-[#4DAFE3] hover:bg-[#3998c7] focus:ring-4 focus:ring-[#4DAFE3]-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#4DAFE3]-600 dark:hover:bg-[#4DAFE3]-700 focus:outline-none dark:focus:ring-[#4DAFE3]-800">Login</button>
        </nav>
    );
};

export default NavBar;