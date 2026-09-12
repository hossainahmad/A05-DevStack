import Hero from "../assets/banner-stack.png";

export default function Banner() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed font-medium">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="btn border-none bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl px-6 font-semibold shadow-md border-0">
              Explore Technologies
            </button>
            <button className="btn btn-outline rounded-xl px-6 font-medium text-slate-700 border-slate-200 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src={Hero}
              alt="Development Stack Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
