import CircleUpRightArrowWhite from "/assets/circled-up-right-white.png";
import LocationWhite from "/assets/location-white.svg";
import Home1 from "/assets/home-5.jpg";

const Featured = `
  <section class="flex justify-between mt-20 mb-8">
    <h2 class="text-[#58254e] text-4xl pr-60">Featured Properties</h2>
  </section>

  <section class="grid grid-cols-12 gap-1">
    <div class="card col-span-5">
      <div class="relative rounded-xl bg-[#f1f0ee] text-[#58254e] p-2 h-[414px]">
        <span class="inline-block absolute top-5 left-5 text-[#58254e] font-semibold bg-white rounded-3xl px-4 py-1">₦47.5m</span>

        <div class="h-full overflow-hidden rounded-xl">
          <img class="h-full w-auto max-w-none" src="${Home1}" alt="Property 1"/>
        </div>
      
        <div class="flex absolute bottom-4 left-4 right-4 bg-[#2c1327] h-[107px] rounded-xl px-2 py-3 text-white">
          <div class="flex-1 flex flex-col justify-between">
            <p class="pl-2 font-bold">Victoria Island Villa</p>
            <p class="flex items-center text-sm">
              <img class="mr-1" src="${LocationWhite}" alt="location icon" width="32px" />
              26, Adisa Akintoye Str.
            </p>
          </div>
          <div class="flex-1 text-sm text-right pr-3">
            <p>Off-plan ₦33m | Finished ₦47.5m</p>
          </div>
          
          <img class="absolute bottom-3 right-3" src="${CircleUpRightArrowWhite}" alt="" width="32px" />
        </div>
      </div>
    </div>

    <div class="card col-span-4">
      <div class="relative rounded-xl bg-[#f1f0ee] text-[#58254e] p-2  h-[414px]">
        <span class="inline-block absolute top-5 left-5 text-[#58254e] font-semibold bg-white rounded-3xl px-4 py-1">₦125m</span>

        <div class="h-full overflow-hidden border rounded-xl">
          <img class="h-full w-auto max-w-none" src="${Home1}" alt="Property 1"/>
        </div>
      
        <div class="flex justify-between absolute bottom-4 left-4 right-4 bg-[#2c1327] h-[107px] rounded-xl px-2 py-3 text-white">
          <div class="flex-1 flex flex-col justify-between">
            <p class="pl-2 font-bold">Victoria Island Villa</p>
            <p class="flex items-center text-sm">
              <img class="mr-1" src="${LocationWhite}" alt="location icon" width="32px" />
              26, Adisa Akintoye Str.
            </p>
          </div>
          <div class="flex-1 text-sm text-right pr-3">
            <p>4 Bed | 2 Bath</p>
          </div>
          
          <img class="absolute bottom-3 right-3" src="${CircleUpRightArrowWhite}" alt="" width="32px" />
        </div>
      </div>
    </div>

    <div class="card col-span-3">
      <div class="relative rounded-xl bg-[#f1f0ee] text-[#58254e] p-2  h-[414px]">
        <span class="inline-block absolute top-5 left-5 text-[#58254e] font-semibold bg-white rounded-3xl px-4 py-1">₦200m</span>

        <div class="h-full overflow-hidden border rounded-xl">
          <img class="h-full w-auto max-w-none" src="${Home1}" alt="Property 1"/>
        </div>
      
        <div class="flex absolute bottom-4 left-4 right-4 bg-[#2c1327] h-[107px] rounded-xl px-3 py-3 text-white">
          <div class="flex-1 flex flex-col justify-between">
            <p class="pl-1 font-bold text-base">Victoria Island Villa</p>
            <p class="flex items-center text-xs">
              <img class="mr-1" src="${LocationWhite}" alt="location icon" width="32px" />
              26, Adisa Akintoye Str.
            </p>
          </div>
          <div class="flex-1 text-xs text-right pr-3">
            <p>Off-plan ₦33m | Finished ₦47.5m</p>
          </div>
          
          <img class="absolute bottom-3 right-3" src="${CircleUpRightArrowWhite}" alt="" width="32px" />
          
        </div>
      </div>
    </div>
  </section>
`;

export default Featured;
