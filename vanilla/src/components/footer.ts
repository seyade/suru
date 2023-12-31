import suruHomesLogo from "/assets/suru-logo-white.png";

// social logos
import XLogo from "/assets/x-white.svg";
import InLogo from "/assets/linkedIn-circled-white.svg";
import FacebookLogo from "/assets/facebook-white.svg";
import InstaLogo from "/assets/instagram-white.svg";

const Footer = `
  <footer class="grid grid-cols-12 mt-20 pb-5 text-white">
    <div class="col-span-12 px-8 md:px-28 py-11 rounded-xl bg-[#2c1327]">
      <h2 class="text-4xl pb-11 mb-9 text-center border-b">
        Nothing Less Than Excellence
      </h2>

      <div class="flex-1 md:flex justify-between mb-24 text-center md:text-left">
        <div class="md:flex">
          <nav class="md:mr-24 leading-9">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Homes</a></li>
              <li><a href="/">Lands</a></li>
              <li><a href="/">Agents</a></li>
            </ul>
          </nav>

          <nav class="leading-9">
            <ul>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Investments Opportunities</a></li>
            </ul>
          </nav>
        </div>

        <div class="my-20 md:m-0">
          <p>Suru House</p> 
          <p>2, Shonny Highway,</p>
          <p>Shonibare Estate,</p>
          <p class="mb-4">Maryland, Lagos.</p>
          <p class="font-bold">(+234) 8171 886 166</p>
          <p class="font-bold">info@suruhomes.com</p>
        </div>

        <nav class="flex justify-center md:justify-normal">
          <a href="/" class="mr-5"><img src="${XLogo}" width="42px" /></a>
          <a href="/" class="mr-5"><img src="${InLogo}" width="42px" /></a>
          <a href="/" class="mr-5"><img src="${InstaLogo}" width="42px" /></a>
          <a href="/"><img src="${FacebookLogo}" width="42px" /></a>            
        </nav>
      </div>

      <div class="md:flex justify-center md:justify-between items-center text-center md:text-left">
        <img src="${suruHomesLogo}" class="logo inline-block" alt="Suru Homes logo" />

        <nav class="my-10 md:my-0">
          <a class="mr-2" href="/">Terms</a> <a href="/">Policy</a>
        </nav>

        <p>&copy; 2023 Suru Homes Ltd. All Rights Reserved</p>
      </div>
    </div>
  </footer>
`;

export default Footer;
