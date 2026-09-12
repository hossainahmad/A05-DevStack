import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto border-t border-slate-200/60">
      <footer className="footer sm:footer-horizontal text-base-content p-10 ">
        <aside>
          <img src={Logo} alt="" />
          <p>
            Build Your Website.
            <br />
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-black">PRODUCT</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Design</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className=" w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Subtle Horizontal Divider */}
          <div className="border-t border-slate-200/60" />

          {/* Footer Bottom Row */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="hover:text-slate-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="hover:text-slate-600 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="divider">
        <aside className="text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DevStack Ltd
          </p>
        </aside>
      </div> */}
    </div>
  );
};

export default Footer;
