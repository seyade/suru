import CircleUpRightArrow from "/assets/circled-up-right.svg";
import Home3 from "/assets/home-1.jpeg";

const Hero = `
  <section class="col-span-12 grid grid-cols-12 gap-1 min-h-[545px]">
    <div class="flex flex-col justify-end col-span-6">
      <h1 class="text-reveal-stagger relative z-10 text-[#2c1327] font-bold bg-white rounded-3xl mb-36 py-6 pr-1">
        Experience Unrivaled Real Estate Excellence
      </h1>
      <a href="/" class="text-[#2c1327] bg-[#f1f0ee] rounded-full px-6 py-4 inline-flex items-center w-fit hover:bg-[#e4e2df] transition ease-in-out duration-500">
        <span class="mr-2">Get In Touch</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
      </a>
    </div>
    <div class="col-span-6">
      <div class="relative overflow-hidden md:w-[800px] -ml-[170px] bg-[#58254e] rounded-3xl h-[545px] flex justify-center items-center">
        <img class="h-full" src="${Home3}" alt="" />
        <a href="/" class="absolute text-[#2c1327] bg-[#f1f0ee] rounded-full px-6 py-4 inline-flex justify-between items-center w-fit hover:bg-[#e4e2df] transition ease-in-out duration-500">
          <span class="mr-2">Show New Homes</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
        </a>
      </div>
    </div>
  </section>
`;

export default Hero;
