import CircleUpRightArrow from "/assets/circled-up-right.svg";
import Home1 from "/assets/home-5.jpg";

const Content1 = `
  <section class="grid grid-cols-12 justify-between mt-20 mb-8 text-center md:text-left">
    <h2 class="element-reveal-slide-up col-span-12 sm:col-span-6 text-[#58254e] text-4xl md:pr-20 mb-8">Your Trusted Partner In Real Estate</h2>
    <p class="col-span-12 sm:col-span-6 text-[#58254e] md:pl-5">From buying and selling to property development, we deliver, unparalleled service and results.</p>
  </section>

  <section class="content-1 md:h-[414px] grid md:grid-rows-2 grid-cols-4 md:grid-flow-col gap-1">
    <div class="element-reveal md:flex md:row-span-2 col-span-4 md:col-span-2 bg-[#2c1327] text-white rounded-xl p-5">
      <div class="md:h-full overflow-hidden bg-[#f1f0ee] text-[#2c1327] rounded-xl flex-1 mb-4 md:mb-0 md:mr-3">
        <img class="md:h-full md:w-auto md:max-w-none" src="${Home1}" alt="Home 1" />
      </div>

      <div class="flex-1 flex flex-col justify-center">
        <h3 class="text-2xl leading-none mb-3">Some subtitle here leading to a page.</h3>
        <p class="mb-5">From buying and selling to property development, we deliver, unparalleled service and results.</p>
        <a href="/" class="text-[#2c1327] bg-[#f1f0ee] rounded-3xl px-4 py-2 inline-flex items-center self-center md:self-auto  w-fit hover:bg-[#e4e2df] transition ease-in-out duration-500">
          <span class="mr-2">Learn More</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
        </a>
      </div>
    </div>

    <div class="element-reveal col-span-4 md:col-span-2 flex items-center justify-center bg-[#58254e] text-white font-bold text-center rounded-xl p-5">
      <p class="flex-none text-left h-full text-[80px]">10+</p>
      <p class="flex-1 flex text-right justify-end items-end h-full pb-4 pr-4 text-[40px]">Years in the industry</p>
    </div>
    <div class="element-reveal col-span-4 md:col-span-1 flex flex-col justify-center bg-[#2c1327] text-white font-bold text-center rounded-xl p-5">
      <p class="text-[80px]">150+</p>
      <p class="text-[40px] pb-5">Properties</p>
    </div>
    <div class="element-reveal col-span-4 md:col-span-1 h-full bg-[#f1f0ee] text-[#2c1327] text-center rounded-xl overflow-hidden">
      <img src="${Home1}" alt="Property 1"/>
    </div>
  </section>
`;

export default Content1;
