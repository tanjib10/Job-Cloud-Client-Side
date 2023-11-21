import Apply from "../Apply/Apply";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-16">
        <Apply></Apply>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
