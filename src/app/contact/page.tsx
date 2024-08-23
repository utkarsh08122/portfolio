function page() {
  return (
    <div className="text-white flex justify-center w-full h-[calc(100vh-40px)]  mt-[40px]">
      <div className=" maxwidth flex flex-col items-center mt-10 ">
        <div className="w-[70%] h-[75%] flex flex-col gap-2">
          <div className=" flex gap-2 flex-col md:flex-row  ">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-slate-800 rounded-2xl p-2  flex-1 h-14"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="bg-slate-800 rounded-2xl p-2 flex-1 h-14"
            />
          </div>
          <div className="flex gap-2 flex-col md:flex-row ">
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-slate-800 rounded-2xl p-2 flex-1 h-14"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="bg-slate-800 rounded-2xl p-2 flex-1 h-14"
            />
          </div>
          <div className="flex ">
            <textarea
              placeholder="Your Message"
              className="w-full h-[23rem] resize-none rounded-2xl p-2 bg-slate-800  "
            ></textarea>
          </div>
          <button className="w-40 h-8 bg-blue-600 rounded-2xl hover:bg-blue-800 ">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
