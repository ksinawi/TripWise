const DiscoverPage = () => {
    const countries = [
      {
        title: "Dubai, United Arab Emirates",
        img: "./images/dubai.jpg",
      },
      {
        title: "Paris, France",
        img: "./images/paris.jpg",
      },
      {
        title: "Tokyo, Japan",
        img: "./images/tokyo.jpg",
      },
      {
        title: "Cairo, Egypt",
        img: "./images/egypt.jpg",
      },
    ];
  
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countries.map((card, index) => (
            <div
              key={index}
              className="group relative w-full h-[40rem] rounded-xl overflow-hidden shadow-md transition duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:opacity-40"
              />
  
              <div className="absolute inset-0 bg-[#4DAFE3] opacity-0 group-hover:opacity-30 transition duration-300 z-0"></div>
  
              <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-white transition duration-300 text-center">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
                >
                  {card.title}
                </h2>
                <a
                  href="#"
                  className="opacity-0 group-hover:opacity-100 bg-white text-[#4DAFE3] font-semibold px-4 py-2 rounded-md text-sm w-max transition duration-300"
                >
                  Begin Planning
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DiscoverPage;
  