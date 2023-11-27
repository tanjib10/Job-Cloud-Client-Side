import searchImg from "../assets/search-interface-symbol.png";
import searchImg2 from "../assets/web.png";
import searchImg3 from "../assets/completed-task.png";
const Apply = () => {
  return (
    <div className="rounded-2xl my-10 lg:my-20 max-w-5xl mx-auto bg-[#D2E3C8]">
      <h3 className="font-bold text-center text-red-600 py-6 lg:py-8">
        Apply Process
      </h3>
      <h2 className="text-xl md:text-2xl lg:text-3xl pb-4 font-bold text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-2 lg:gap-4 p-6 md:p-4">
        <div className="card w-full md:w-72 shadow-lg">
          <figure className="px-6 md:px-10 pt-6 md:pt-10">
            <img
              src={searchImg}
              className="rounded-xl w-12 md:w-16 lg:w-24 mx-auto"
              alt="Search a job"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl">
              1. Search a job
            </h2>
            <p className="text-sm md:text-base">Search your desired job</p>
          </div>
        </div>
        <div className="card w-full md:w-72 shadow-lg">
          <figure className="px-6 md:px-10 pt-6 md:pt-10">
            <img
              src={searchImg2}
              className="rounded-xl w-12 md:w-16 lg:w-24 mx-auto"
              alt="Apply for job"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl">
              2. Apply for job
            </h2>
            <p className="text-sm md:text-base">Apply for your desired job</p>
          </div>
        </div>
        <div className="card w-full md:w-72 shadow-lg">
          <figure className="px-6 md:px-10 pt-6 md:pt-10">
            <img
              src={searchImg3}
              className="rounded-xl w-12 md:w-16 lg:w-24 mx-auto"
              alt="Get your job"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl">
              3. Get your job
            </h2>
            <p className="text-sm md:text-base">Wait until you get selected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
