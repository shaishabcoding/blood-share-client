import { FaSearch } from "react-icons/fa";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  // const data = [];

  return (
    <div className="hero min-h-screen my-1 lg:rounded-lg lg:mt-6 lg:mb-10 md:py-10 bg-gradient-to-bl from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500">
      <div className="hero-content flex-col lg:flex-row-reverse lg:p-28 gap-4 lg:gap-20 overflow-hidden">
        <Swiper
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[Autoplay, EffectCards]}
          className="w-[220px] md:w-[500px] lg:w-[300px] drop-shadow-md"
        >
          <SwiperSlide className="p-2 rounded-lg">jajsklf</SwiperSlide>
        </Swiper>
        <div className="md:px-10 lg:pl-0">
          <h1 className="lg:text-5xl mt-4 lg:mt-0 text-2xl font-bold text-[#D32F2F] dark:text-white">
            Save Lives, Donate Blood Today!
          </h1>
          <p className="lg:my-6 my-4 text-[#333333] dark:text-white">
            Every two seconds, someone needs blood. Your generous donation can
            provide a lifeline to those in need. Whether you're a first-time
            donor or a seasoned volunteer, your contribution is invaluable. Join
            us in our mission to ensure a steady and safe blood supply for
            everyone. Together, we can save lives and make a real difference in
            our community. Sign up now to donate blood and become a hero today!
          </p>
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item border-primary"
                  type="text"
                  placeholder="Search for blood..."
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item btn-primary">
                Search <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
