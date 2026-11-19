import AnimatedTitle from "../AnimatedTitles";
import Button from "../Button";
const ImageClipBox = ({ src, clipClass = "" }) => (
  <div className={clipClass}>
    {" "}
    <img src={src} alt="" className="size-full object-cover" />{" "}
  </div>
);
const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 py-20 md:px-8 md:py-28">
      {" "}
      <div className=" relative mx-auto min-h-[600px] max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-blue-50 shadow-[0_0_80px_rgba(0,0,0,0.45)] ">
        {" "}
        {/* ========================= BACKGROUND GLOW ========================= */}{" "}
        <div className=" pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px] " />{" "}
        <div className=" pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/50 to-transparent " />{" "}
        {/* ========================= LEFT IMAGES ========================= */}{" "}
        <div className=" pointer-events-none absolute -left-24 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-8 lg:w-80 xl:left-16 xl:w-96 ">
          {" "}
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />{" "}
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass=" contact-clip-path-2 translate-y-52 lg:translate-y-36 "
          />{" "}
        </div>{" "}
        {/* ========================= RIGHT CHARACTER ========================= */}{" "}
        <div className=" pointer-events-none absolute -right-20 -top-32 hidden w-60 opacity-80 md:block lg:-right-5 lg:top-10 lg:w-72 xl:right-8 xl:w-80 ">
          {" "}
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass=" absolute scale-110 lg:scale-125 "
          />{" "}
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass=" sword-man-clip-path relative scale-110 lg:scale-125 "
          />{" "}
        </div>{" "}
        {/* ========================= MAIN CONTENT ========================= */}{" "}
        <div className=" relative z-10 flex min-h-[600px] flex-col items-center justify-center px-6 py-24 text-center md:px-12 ">
          {" "}
          {/* SMALL TITLE */}{" "}
          <p className=" mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 ">
            {" "}
            Join Nova{" "}
          </p>{" "}
          {/* MAIN TITLE */}{" "}
          <AnimatedTitle
            title=" let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether. "
            className=" w-full max-w-5xl font-zentry !text-4xl !font-black !leading-[0.88] tracking-[-0.04em] text-white sm:!text-5xl md:!text-6xl lg:!text-[6rem] xl:!text-[7rem] "
          />{" "}
          {/* BUTTON */}{" "}
          <Button
            title="Contact Us"
            containerClass=" mt-10 cursor-pointer rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-xs uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-400/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] "
          />{" "}
        </div>{" "}
        {/* ========================= BOTTOM GLOW ========================= */}{" "}
        <div className=" pointer-events-none absolute bottom-0 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px] " />{" "}
      </div>{" "}
    </section>
  );
};
export default Contact;
