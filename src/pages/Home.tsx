import Banner from "../Components/Banner";
import Book from "../Components/Book";
import Doctors from "../Components/Doctors";
import MiddlePart from "../Components/Special";

const Home = () => {
  return (
    <div>
      <Banner />
      <MiddlePart />
      <Doctors />
      <Book />
    </div>
  );
};

export default Home;
