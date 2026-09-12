import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50  bg-white/90 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex items-center justify-between">
        <img src={Logo} alt="" />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">
            Home
          </a>
          <a
            href="#technologies"
            className="hover:text-slate-900 transition-colors"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="hover:text-slate-900 transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
        </nav>
        <div className="flex gap-3">
          <button className="btn ">Sign In</button>
          <button className="btn rounded-2xl bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
            Sign Up
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </header>
  );
};

export default Nav;
