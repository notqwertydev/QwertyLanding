// components/Footer.js

const Footer = () => {
  return (
    <footer className=" border-t border-white/5 lg:p-8">
      <div className="flex flex-col justify-between items-center px-8 py-6 mx-auto md:px-12 lg:px-16 xl:px-36 2xl:max-w-7xl">
        <section className="gap-x-8 gap-y-6 mt-6">
          <div>
            <p className="text-sm text-zinc-400 lg:col-span-2">
              © 2023 notqwerty. All rights reserved.  </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
