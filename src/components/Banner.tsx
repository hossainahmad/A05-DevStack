import Hero from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className=" ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="btn border-none bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl px-6 font-semibold shadow-md border-0">
              Explore Technologies
            </button>
            <button className="btn btn-outline rounded-xl px-6 font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className=" flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img src={Hero} alt="Development Stack Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
