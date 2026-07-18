import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { Outlet } from "react-router";

const mainLayOut = () => {
  return (
    <div >
      <Header />
      <Outlet />
      < Footer/>
    </div>
  );
}

export default mainLayOut
