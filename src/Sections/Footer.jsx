const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="fot-p text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/arxchit"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://twitter.com/circaxm"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </a>

        <a
          href="https://instagram.com/awrchitt"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>

      <p className="fot-p text-white-500">
        © 2024 Archit Jaiswal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
