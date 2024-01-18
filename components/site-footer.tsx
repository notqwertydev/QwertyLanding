// components/Footer.js

const Footer = () => {
  return (
    <footer className=" border-t border-white/5 lg:p-8">
      <div className="flex flex-col justify-between items-center px-8 py-6 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
        <nav className="flex flex-col lg:flex-row gap-8">
          <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors delay-150 hover:delay-[0ms] hover:bg-mirage" href="/#process">
            <span className="relative z-10">Terms of use</span>
          </a>
          <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors delay-150 hover:delay-[0ms] hover:bg-mirage" href="/#benefits">
            <span className="relative z-10">Responsible disclosure</span>
          </a>
          <a className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-xs text-zinc-400 transition-colors delay-150 hover:delay-[0ms] hover:bg-mirage" href="/#pricing">
            <span className="relative z-10">Privacy policy</span>
          </a>
        </nav>
        <section className="gap-x-8 gap-y-6 mt-6">
          <div>
            <p className="text-sm text-zinc-400 lg:col-span-2">
              © 2023 Notqwerty. All rights reserved.  </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
