import { BiSolidDonateBlood } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import getRandomColor from "../../../../utils/getRandomColor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const { register, handleSubmit } = useForm();

  const imgs = [
    "https://images.healthshots.com/healthshots/en/uploads/2022/06/14090406/blood-donor-370x207.jpg",
    "https://i.cbc.ca/1.3652241.1466814496!/fileImage/httpImage/ally-giving-blood.jpg",
    "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Fblood-donation-21032021-AhmadArdity-Pixabay-1200.jpg?w=480&auto=format%2Ccompress&fit=max",
    "https://images.newscientist.com/wp-content/uploads/2023/01/30205513/SEI_142285830.jpg?crop=16:9,smart&width=1200&height=675&upscale=true",
  ];

  const handleFormSubmit = handleSubmit(({ bloodGroup }) => {
    const query = bloodGroup === "default" ? "" : bloodGroup;
    navigate("donars?bloodGroup=" + query);
  });

  return (
    <div className="hero lg:min-h-screen my-1 lg:rounded-lg lg:mt-6 lg:mb-10 md:py-10 bg-gradient-to-bl from-green-50 dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500">
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
          {imgs.map((image, idx) => (
            <SwiperSlide
              key={idx}
              style={{ backgroundColor: getRandomColor() }}
              className="p-2 rounded-lg"
            >
              <img
                src={image}
                className="w-full aspect-square md:aspect-video lg:aspect-square rounded-lg drop-shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:px-10 lg:pl-0">
          <h1 className="lg:text-5xl mt-4 lg:mt-0 text-2xl font-bold text-primary dark:text-primary-light">
            <span>Save Lives, Donate Blood Today!</span>{" "}
            <BiSolidDonateBlood className="inline" />
          </h1>
          <p className="lg:my-6 my-4 text-secondary dark:text-secondary-light">
            Every two seconds, someone needs blood. Your generous donation can
            provide a lifeline to those in need. Whether you're a first-time
            donor or a seasoned volunteer, your contribution is invaluable. Join
            us in our mission to ensure a steady and safe blood supply for
            everyone. Together, we can save lives and make a real difference in
            our community. Sign up now to donate blood and become a hero today!
          </p>
          <form onSubmit={handleFormSubmit} className="join w-full">
            <select
              {...register("bloodGroup")}
              defaultValue="default"
              className="select grow md:grow-0 select-bordered join-item border-primary dark:border-primary-light bg-white dark:bg-gray-400"
            >
              <option hidden disabled value="default">
                Select a blood group
              </option>
              {bloodGroups.map((blood, idx) => (
                <option key={idx} value={blood}>
                  {blood}
                </option>
              ))}
            </select>

            <div className="indicator">
              <button className="btn join-item bg-primary dark:bg-primary-light text-secondary-light border-primary dark:border-primary-light">
                Search <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
