import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div className="text-white flex justify-center w-full h-[calc(100vh-40px)] mt-[40px] ">
      <div className="maxwidth flex  items-center ">
        <div className="w-full h-[80%] flex flex-col items-center  md:flex-row">
        <div className="block md:hidden w-[250px] h-[250px] ">
            <div >
              <img
                className="w-[250px] h-[250px] rounded-full  border-blue-500 border-2"
                src=""
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-[70%]  ">
            <p className="text-xl md:text-3xl  mt-24 ">Hi, Myself</p>
            <h2 className="text-2xl md:text-5xl font-bold mt-2 text-blue-800 ">Utkarsh Singh</h2>
            <p className="text-xl md:text-3xl mt-2">
              And I'm a
              <span className=" text-blue-800  ">Full Stack Web Developer</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sequi voluptatem blanditiis expedita deleniti natus est,
              accusantium iusto nesciunt necessitatibus possimus incidunt, non
              reiciendis aspernatur, sed rerum suscipit magnam culpa.
            </p>
            <div className=" mt-4 flex gap-2">
              <FaGithub className=" border-blue-600 border-2  text-blue-500 hover:bg-blue-700 hover:text-black p-[4px] w-[40px] h-[40px] rounded-[50%] shadow-2xl  " />
              <FaLinkedin className=" border-blue-600 border-2 text-blue-500 hover:bg-blue-700 hover:text-black p-[4px] w-[40px] h-[40px] rounded-[50%]   " />
            </div>
            <button className="w-40 h-8 bg-blue-600 mt-5 rounded-2xl hover:bg-blue-800 ">
              Download CV
            </button>
            <br />
            <br />

          </div>
          <div className="w-[30%] p-1 hidden md:block ">
            <div className="mt-24 w-full h-full flex justify-center ">
              <img
                className="w-[350px] h-[350px] rounded-full  border-blue-500 border-2"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
