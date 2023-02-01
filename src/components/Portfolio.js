import styles from "../styles";

const Icons = () => {
    return ( 
        <section className=" flex">
            <h1 className=" text-white text-[32px] ">Tech I worked with</h1>      
        </section>
     );
}

const Portfolio = () => {
    return ( 
        <section className=" flex">
            <div className=" flex flex-1">
                <h1 className=" text-white text-[32px] ">Tech I worked with</h1>                
            </div>
            <div className=" flex flex-1">
                <Icons />
                <p>Hello</p>
            </div>

        </section>
     );
}
 
export default Portfolio;