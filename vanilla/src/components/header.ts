import suruHomesLogo from "/assets/suru-logo.png";

const Header = `
  <header class="header pt-5 flex justify-between items-center w-full ease-in-out duration-500">
    <a class="header__logo" href="/">
      <img src="${suruHomesLogo}" class="logo w-44" alt="Suru Homes logo" />
    </a>

    <nav class="header__navigation">
      <ul class="grid gap-8 grid-flow-col font-bold text-[#58254e]">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Agents</a></li>
        <li><a href="/">Properties</a></li>
        <li><a href="/">Lands</a></li>
        <li><a href="/">Projects</a></li>
      </ul>
    </nav>

    <a class="header__contact-link bg-[#58254e] flex-initial rounded-full text-center px-4 py-2 text-white hover:bg-[#2c1327] transition ease-in-out duration-500" href="/">Contact Us</a>
  </header>
`;

export default Header;
