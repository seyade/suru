import suruHomesLogo from "/assets/suru-logo.png";

const Header = `
  <header class="element-reveal-down header pt-5 md:flex md:justify-between md:items-center w-full ease-in-out duration-500">
    <div class="flex-1 flex justify-between items-center">
      <a class="header__logo" href="/">
        <img src="${suruHomesLogo}" class="logo w-44" alt="Suru Homes logo" />
      </a>

      <div class="md:hidden self-end">
        <button id="menu-button" class="font-bold bg-transparent bg-slate-800 text-white rounded-full">Menu</button>
      </div>
    </div>

    <div id="menu" class="hidden md:flex-initial md:flex md:justify-items-end text-center md:text-left border-b md:border-none pb-8 md:pb-0 bg-white shadow-md md:shadow-none rounded-b-lg transition-all">
      <nav class="header__navigation mb-8 md:mb-0 md:mr-20">
        <ul class="md:grid gap-8 grid-flow-col font-bold text-[#58254e]">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Agents</a></li>
          <li><a href="/">Properties</a></li>
          <li><a href="/">Lands</a></li>
          <li><a href="/">Projects</a></li>
        </ul>
      </nav>

      <a class="header__contact-link bg-[#58254e] flex-initial rounded-full text-center px-4 py-2 text-white hover:bg-[#2c1327] transition ease-in-out duration-500" href="/">Contact Us</a>
    </div>
  </header>
`;

export default Header;
