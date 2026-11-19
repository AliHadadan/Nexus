import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = ` perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98) `;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      ref={itemRef}
      className={`transform-gpu transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);
  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  return (
    <div className="relative size-full overflow-hidden rounded-2xl bg-zinc-900">
      {" "}
      {/* VIDEO */}{" "}
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className=" absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105 "
      />{" "}
      {/* DARK OVERLAY */}{" "}
      <div className=" absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent " />{" "}
      {/* CONTENT */}{" "}
      <div className=" relative z-10 flex size-full flex-col justify-between p-5 md:p-7 text-blue-50 ">
        {" "}
        {/* TITLE */}{" "}
        <div>
          {" "}
          <h1 className=" max-w-3xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-5xl ">
            {" "}
            {title}{" "}
          </h1>{" "}
          {description && (
            <p className=" mt-4 max-w-sm text-xs leading-relaxed text-white/60 md:text-sm ">
              {" "}
              {description}{" "}
            </p>
          )}{" "}
        </div>{" "}
        {/* COMING SOON */}{" "}
        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className=" relative flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:text-white "
          >
            {" "}
            {/* RADIAL HOVER */}{" "}
            <div
              className=" pointer-events-none absolute -inset-px transition-opacity duration-300 "
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient( 100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(101,111,226,.45), transparent 70% )`,
              }}
            />{" "}
            <TiLocationArrow className=" relative z-20 text-base text-white " />{" "}
            <p className="relative z-20"> Coming Soon </p>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};
const Features = () => {
  return (
    <section className="bg-black pb-40">
      {" "}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {" "}
        {/* INTRO */}{" "}
        <div className="px-2 py-24 md:px-5 md:py-32">
          {" "}
          <p className=" mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-50/80 ">
            {" "}
            Into the Metagame Layer{" "}
          </p>{" "}
          <p className=" max-w-xl text-base leading-relaxed text-blue-50/40 md:text-lg ">
            {" "}
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.{" "}
          </p>{" "}
        </div>{" "}
        {/* ========================= LARGE HERO CARD ========================= */}{" "}
        <BentoTilt className=" group relative mb-7 h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl md:h-[65vh] ">
          {" "}
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                {" "}
                radia<b className="text-violet-300">n</b>t{" "}
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />{" "}
        </BentoTilt>{" "}
        {/* ========================= BENTO GRID ========================= */}{" "}
        <div className=" grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-[300px_300px_300px] md:gap-7 ">
          {" "}
          {/* CARD 1 */}{" "}
          <BentoTilt className=" group relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:row-span-2 md:h-auto ">
            {" "}
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  {" "}
                  zig<b className="text-violet-300">m</b>a{" "}
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />{" "}
          </BentoTilt>{" "}
          {/* CARD 2 */}{" "}
          <BentoTilt className=" group relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:h-auto ">
            {" "}
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  {" "}
                  n<b className="text-violet-300">e</b>xus{" "}
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
            />{" "}
          </BentoTilt>{" "}
          {/* CARD 3 */}{" "}
          <BentoTilt className=" group relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:h-auto ">
            {" "}
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  {" "}
                  az<b className="text-violet-300">u</b>l{" "}
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />{" "}
          </BentoTilt>{" "}
          {/* COMING SOON CARD */}{" "}
          <BentoTilt className=" group relative h-[300px] overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-300 md:h-auto ">
            {" "}
            <div className=" flex size-full flex-col justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02] ">
              {" "}
              <h1 className=" max-w-xs text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-black md:text-5xl ">
                {" "}
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.{" "}
              </h1>{" "}
              <TiLocationArrow className=" m-5 self-end text-black transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-[5.5] scale-[5] " />{" "}
            </div>{" "}
          </BentoTilt>{" "}
          {/* VIDEO CARD */}{" "}
          <BentoTilt className=" group relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:h-auto ">
            {" "}
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              playsInline
              className=" size-full object-cover object-center transition-transform duration-700 group-hover:scale-105 "
            />{" "}
            <div className=" pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent " />{" "}
          </BentoTilt>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Features;
