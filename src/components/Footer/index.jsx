import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];
const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {" "}
      {/* TOP BORDER / GLOW */}{" "}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />{" "}
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        {" "}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {" "}
          {/* COPYRIGHT */}{" "}
          <p className=" text-center text-xs font-light tracking-wide text-white/40 md:text-left ">
            {" "}
            © Nova 2024. All rights reserved{" "}
          </p>{" "}
          {/* SOCIAL LINKS */}{" "}
          <div className="flex items-center gap-3">
            {" "}
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social media"
                className=" group flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] "
              >
                {" "}
                <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                  {" "}
                  {link.icon}{" "}
                </span>{" "}
              </a>
            ))}{" "}
          </div>{" "}
          {/* PRIVACY POLICY */}{" "}
          <a
            href="#privacy-policy"
            className=" text-xs font-light tracking-wide text-white/40 transition-colors duration-300 hover:text-white hover:underline md:text-right "
          >
            {" "}
            Privacy Policy{" "}
          </a>{" "}
        </div>{" "}
        {/* BOTTOM LINE */} <div className="mt-8 h-px w-full bg-white/5" />{" "}
        {/* BRAND */}{" "}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 md:flex-row">
          {" "}
          <span className=" text-[10px] font-semibold uppercase tracking-[0.35em] text-white/20 ">
            {" "}
            Nova{" "}
          </span>{" "}
          <span className=" text-[10px] uppercase tracking-[0.25em] text-white/20 ">
            {" "}
            Built for the future{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
