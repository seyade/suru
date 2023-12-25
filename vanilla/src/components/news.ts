import CircleUpRightArrow from "/assets/circled-up-right.svg";
import PlayIcon from "/assets/play-button-circled.svg";

const News = `
  <section class="flex justify-between mt-20 mb-8">
    <h2 class="element-reveal-slide-up text-[#58254e] text-4xl pr-60">
      Stay Updated With News And Trends
    </h2>
  </section>

  <section class="news h-[414px] grid grid-cols-12 grid-rows-2 grid-flow-col gap-1">
    <div class="element-reveal col-span-4 row-span-2 flex flex-col justify-center items-center h-full p-6 rounded-xl bg-[#f1f0ee] text-center">
      <div class="flex flex-col items-center justify-center bg-[#ddd] rounded-xl p-6">
        <h2 class="font-bold mb-6">Haldane McCall Plc. Seeks The Nigerian Exchange Group (NGX) Approval For Full Listing</h2>
        <p class="mb-11">Dec 5, 2023</p>
          <a href="/">
          <img src="${PlayIcon}" alt="CircleUpRightArrow" width="42px"/></a>
      </div>
    </div>

    <div class="element-reveal col-span-4 row-span-2 flex flex-col justify-center items-center p-12 rounded-xl bg-[#f1f0ee] text-center">
      <h2 class="font-bold mb-6">Haldane McCall Plc. Seeks The Nigerian Exchange Group (NGX) Approval For Full Listing</h2>
      <p class="mb-11">Dec 5, 2023</p>
      <a class="inline-flex items-center w-fit px-4 py-2 bg-[#e4e2df] rounded-3xl hover:bg-[#d0cecc] transition ease-in-out duration-500" href="/">
        <span class="mr-2">Read More</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
      </a>
    </div>

    <div class="element-reveal col-span-4 flex flex-col justify-center items-center px-12 rounded-xl bg-[#f1f0ee]">
      <h2 class="font-bold mb-3">Haldane McCall Plc. Seeks The Nigerian Exchange Group (NGX) Approval For Full Listing</h2>
      <p class="mb-6">Dec 5, 2023</p>
      <a class="inline-flex items-center w-fit px-4 py-2 bg-[#e4e2df] rounded-3xl hover:bg-[#d0cecc] transition ease-in-out duration-500" href="/">
        <span class="mr-2">Read More</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
      </a>
    </div>

    <div class="element-reveal col-span-4 flex flex-col justify-center items-center p-12 rounded-xl bg-[#f1f0ee]">
      <h2 class="font-bold mb-3">Some news title here</h2>
      <p class="mb-6">Dec 5, 2023</p>
      <a class="inline-flex items-center w-fit px-4 py-2 bg-[#e4e2df] rounded-3xl hover:bg-[#d0cecc] transition ease-in-out duration-500" href="/">
        <span class="mr-2">Read More</span> <img src="${CircleUpRightArrow}" alt="CircleUpRightArrow" width="32px"/>
      </a> 
    </div>
  </section>
`;

export default News;
