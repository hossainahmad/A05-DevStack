import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center mt-5">
        <img src={Logo} alt="" />
        <ul className=" flex gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="flex gap-3">
          <button className="btn rounded-1xl ">Sign In</button>
          <button className="btn rounded-2xl btn-secondary">Sign Up</button>
        </div>
      </div>
      <div className="divider"></div>
    </nav>
  );
};

export default Nav;
