function page() {
  return (
    <div className="text-white flex justify-center mt-[40px] w-full h-[calc(100vh-40px)] ">
      <div className="maxwidth flex items-center ">
        <div className="w-full h-full flex flex-col items-center md:flex-row md:justify-center gap-2 md:gap-4 ">
          <div className=" md:w-[30%] p-1   ">
            <div className="mt-14 flex justify-center ">
              <img
                className="w-[250px] h-[350px] md:w-[350px] md:h-[400px] rounded-3xl overflow-hidden border-blue-500 border-2"
                src=""
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-[60%] p-10 md:mt-24">
            <h2 className="text-3xl md:text-5xl  ">About Me</h2>
            <p className="md:text-3xl text-xl mt-2">
              And I'm a
              <span className="text-blue-700 hidden md:block">
                Full Stack Web Developer
              </span>
            </p>
            <div className="text-xl text-blue-700 md:hidden block">
              Full Stack Web Developer
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              sequi voluptatem blanditiis expedita deleniti natus est,
              accusantium iusto nesciunt necessitatibus possimus incidunt, non
              reiciendis aspernatur, sed rerum suscipit magnam culpa.
            </p>

            <button className="w-40 h-8 bg-blue-600 mt-5 rounded-2xl hover:bg-blue-800 ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
