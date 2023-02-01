
import styles from "../styles";
import { discount, robot } from "../assets";


const Hero = () => {
    return ( 
        
         <section id="home" className=" flex md:flex-row flex-col py-6 sm:py-10   relative">
            <div className="flex  flex-col flex-1 justify-center items-start xl:px-0 sm:px-16">
                <div className="flex justify-center items-center flex-row rounded-[10px] bg-gradient-to-r from-yellow-400 to-red-500 px-3">
                    <img src={discount} alt="img"/>
                    <p className="text-white ">20% <span className="font-bold">Dispount</span> for 1 Month</p>
                </div>
                <div className="flex flex-row items-center justify-center relative">
                   <h1 className="text-white mt-3  text-[52px] font-poppins uppercase">We build   <span className=" text-cyan-300">modern</span> websites with Tailwind</h1>
                    <div className=" bg-cyan-300 p-1 rounded-full absolute bottom-[-20px] right-0 w-[100px] h-[100px] cursor-pointer">
                        <div className=" bg-black rounded-full w-[1005] h-[100%] text-white items-center flex justify-center font-poppins">Next</div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center relative">
                   <p className="text-white mt-10 font-light  "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   
                </div>
            </div>

            <div className=" flex-1 flex-col  justify-center items-start relative">
                <img src={robot} className="w-[100%] h-[100%] relative z-10"></img>
                <div class="pink__gradient  absolute h-[100%] w-[100%] z-0  right-0 top-0">
            </div>

            </div>
         </section> 
     );
}
 
export default Hero;