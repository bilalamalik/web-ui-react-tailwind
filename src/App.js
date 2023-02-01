
import React  from "react";
import {Navbar, Hero, Footer, Portfolio, Tech} from './components'
import styles from "./styles";


function App() {
  return (
    <div className="App bg-primary w-full  h-full">

      {/* Nav bar wrapper */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className="xl:max-w-[1280px] w-full">
                 <Navbar />
          </div>
      </div>
      {/* Hero section */}
      <div className=" bg-primar flex justify-center items-start">
          <div className=" xl:max-w-[1280px] w-full">
             <Hero />
          </div>
      </div>
      <div className=" bg-primar flex justify-center items-start px-6">
          <div className=" xl:max-w-[1280px] w-full">
              <Tech />
          </div>
      </div>

      <div className=" bg-primar flex justify-center items-start px-6">
          <div className=" xl:max-w-[1280px] w-full">
              <Portfolio />
          </div>
      </div>
      <div className=" bg-primar flex justify-center items-start px-6">
          <div className=" w-full">
              <Footer />
          </div>
      </div>
    </div>
  );
}

export default App;
