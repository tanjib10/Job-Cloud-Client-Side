import Apply from "../Apply/Apply";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-16">
        <JobCategory></JobCategory>
        <Apply></Apply>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
