import DiscoverPage from "./DiscoverPage";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Nav Bar */}
      <NavBar />

      {/* Landing Page */}
      <section className="pt-32 px-6 md:px-16 min-h-screen flex flex-col md:flex-row items-center justify-between bg-white">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 pl-10">
            Discover Your Next <span className="text-[#4DAFE3]">Adventure</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 pl-10">
            Plan smarter, travel further. Let TripWise help you organize the perfect trip.
          </p>
          <a href="#discover" className="text-white bg-[#4DAFE3] hover:bg-[#3998c7] focus:ring-4 focus:ring-[#4DAFE3]-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#4DAFE3]-600 dark:hover:bg-[#4DAFE3]-700 focus:outline-none dark:focus:ring-[#4DAFE3]-800 ml-10">Discover</a>
          <button type="button" className="text-black bg-white hover:bg-[#e5e5e5] focus:ring-4 focus:ring-[#4DAFE3]-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#4DAFE3]-600 dark:hover:bg-[#4DAFE3]-700 focus:outline-none dark:focus:ring-[#4DAFE3]-800 border border-black">Sign In</button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="/images/landingpage.jpg" alt="Travel Illustration" className="w-full max-w-md md:max-w-lg"/>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="min-h-screen flex items-center justify-between bg-white">
        <div className="overflow-x-hidden">
          <h1 className="text-4xl md:text-6xl font-bold text-[#3998c7] leading-tight pl-150">Discover</h1>
            <p className="text-xl text-gray-600 mb-8 pl-10 pl-145">
              Discover your next journey here.
            </p>
          <DiscoverPage/>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
