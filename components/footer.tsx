import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="text-left border-t border-slate-300 py-2 text-slate-400">
        <div className="flex items-center gap-2">
          <div>© 2021 - 2025 Howard Zhong</div>
          <div className="flex text-xl items-center gap-2">
            <a href="https://github.com/h2zh">
              <div className="hover:scale-110 ease-in">
                <FaGithub />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/howard-zhong-uwmadison/">
              <div className="hover:scale-110 ease-in">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
