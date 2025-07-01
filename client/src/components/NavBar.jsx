const NavBar = () => {
    return (
        <nav className="bg-white w-full fixed top-0 left-0 z-[1000] shadow-md px-[5%] py-4 flex justify-between items-center">
            <a href="#" className="logo">
                <img src="./images/logo.png" alt="Website Logo" className="w-auto h-15"></img>
            </a>

            <ul className="flex gap-[25px] list-none">
            <li><a href="#" class="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Discover</a></li>
                <li><a href="#" class="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Plan</a></li>
                <li><a href="#" class="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">Chat-Bot</a></li>
                <li><a href="#" class="text-black no-underline text-[17px] font-semibold hover:text-[#4DAFE3] hover:underline hover:text-[18px] transition-all duration-300">About Us</a></li>
            </ul>

            <a href="" class="bg-[#4DAFE3] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#3998c7] transition duration-300">Login</a>
        </nav>
    );
};

export default NavBar;