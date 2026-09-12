import Logo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col items-start">
            <img src={Logo} alt="" className="pb-3" />
            <p className="text-slate-400 text-sm max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="grid grid-flow-col gap-3 text-sm text-slate-500 mt-5">
              <li className="link link-hover">
                <a href="#github" className="hover:text-slate-900">
                  GitHub
                </a>
              </li>
              <li className="link link-hover">
                <a href="#twitter" className="hover:text-slate-900">
                  Twitter
                </a>
              </li>
              <li className="link link-hover">
                <a href="#linkedin" className="hover:text-slate-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold footer-title mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-slate-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-slate-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#design" className="hover:text-slate-900">
                  Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold footer-title mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-slate-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold footer-title mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-slate-900">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-900">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#cookie" className="hover:text-slate-900">
                  Cookie policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100" />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
