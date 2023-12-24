import CircleUpRightArrow from "/assets/circled-up-right.svg";
import Home1 from "/assets/home-5.jpg";

const Content1 = `
  <section class="flex justify-between mt-20 mb-8">
    <h2 class="section-title text-[#58254e] text-4xl pr-60">Your Trusted Partner In Real Estate</h2>
    <p class="class="text-[#58254e]">From buying and selling to property development, we deliver, unparalleled service and results.</p>
  </section>

  <section class="h-[414px] grid grid-rows-2 grid-cols-4 grid-flow-col gap-1">
    <div class="card flex row-span-2 col-span-2 bg-[#2c1327] text-white rounded-xl p-5">
      
      <div class="h-full overflow-hidden bg-[#f1f0ee] text-[#2c1327] rounded-xl flex-1 mr-3">
        <img class="h-full w-auto max-w-none" src="${Home1}" alt="Home 1" />
      </div>

      <div class="flex-1 flex flex-col justify-center">
        <h3 class="text-2xl leading-none mb-3">Some subtitle here leading to a page.</h3>
        <p class="mb-5">From buying and selling to property development, we deliver, unparalleled service and results.</p>
        <a href="/" class="text-[#2c1327] bg-[#f1f0ee] rounded-3xl px-4 py-2 inline-flex items-center w-fit hover:bg-[#e4e2df] transition ease-in-out duration-500">
          <span class="mr-2">Learn More</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
        </a>
      </div>
    </div>

    <div class="card col-span-2 flex items-center justify-center bg-[#58254e] text-white font-bold text-center rounded-xl p-5">
      <p class="flex-none text-left h-full text-[80px]">10+</p>
      <p class="flex-1 flex text-right justify-end items-end h-full pb-4 pr-4 text-[40px]">Years in the industry</p>
    </div>
    <div class="card col-span-1 flex flex-col justify-center bg-[#2c1327] text-white font-bold text-center rounded-xl p-5">
      <p class="text-[80px]">150+</p>
      <p class="text-[40px] pb-5">Properties</p>
    </div>
    <div class="card col-span-1 h-full bg-[#f1f0ee] text-[#2c1327] text-center rounded-xl overflow-hidden">
      <img src="${Home1}" alt="Property 1"/>
    </div>
  </section>
`;

export default Content1;
