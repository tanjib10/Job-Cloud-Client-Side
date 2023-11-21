import searchImg from "../assets/search-interface-symbol.png";
import searchImg2 from "../assets/web.png";
import searchImg3 from "../assets/completed-task.png";
const Apply = () => {
  return (
    <div className="rounded-2xl my-20 max-w-5xl mx-auto bg-[#D2E3C8]">
      <h3 className="font-bold text-center text-red-600 py-8">Apply Process</h3>
      <h2 className="text-3xl pb-4 font-bold text-center">How It Works</h2>
      <div className="grid grid-cols-3 gap-4 p-12">
        <div className="card w-72 shadow-lg">
          <figure className="px-10 pt-10">
            <img src={searchImg} className="rounded-xl w-16 lg:w-24" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">1. Search a job</h2>
            <p className="">Search your desired job</p>
          </div>
        </div>
        <div className="card w-72 shadow-lg">
          <figure className="px-10 pt-10">
            <img src={searchImg2} className="rounded-xl w-16 lg:w-24" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">2. Apply for job</h2>
            <p className="">Apply for your desired job</p>
          </div>
        </div>
        <div className="card w-72 shadow-lg">
          <figure className="px-10 pt-10">
            <img src={searchImg3} className="rounded-xl w-16 lg:w-24" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">3. Get your job</h2>
            <p>Wait until you get selected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
