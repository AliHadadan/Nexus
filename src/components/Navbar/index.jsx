import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "../Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;

    if (isAudioPlaying) {
      audioElementRef.current.play().catch(() => {});
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 mx-auto h-16 px-4 sm:inset-x-6 sm:px-0"
    >
      <header className="absolute left-0 top-1/2 w-full -translate-y-1/2">
        <nav className="mx-auto flex h-16 w-full items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-6">
            <a href="#nexus" className="flex items-center justify-center">
              <img
                src="/img/logo.png"
                alt="logo"
                className="w-9 object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="hidden md:flex items-center justify-center gap-1 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-blue-100"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden items-center md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
              className={clsx(
                "group ml-6 flex h-11 w-11 items-center justify-center rounded-full",
                "border border-white/10 bg-white/[0.06]",
                "backdrop-blur-md transition-all duration-300",
                "hover:border-white/20 hover:bg-white/[0.12]",
                "hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]",
              )}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {isIndicatorActive ? (
                <div className="flex h-5 items-center gap-[2px]">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <span
                      key={bar}
                      className="music-bar"
                      style={{
                        animationDelay: `${bar * 0.08}s`,
                      }}
                    />
                  ))}
                </div>
              ) : (
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/70 transition-all duration-300 group-hover:text-white"
                >
                  <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="currentColor" />
                  <path
                    d="M15.5 8.5C16.4375 9.4375 17 10.7109 17 12C17 13.2891 16.4375 14.5625 15.5 15.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 5.5C20.1875 7.1875 21 9.47656 21 12C21 14.5234 20.1875 16.8125 18.5 18.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
