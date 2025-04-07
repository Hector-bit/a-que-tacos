'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="flex flex-col px-3 sm:px-8 gap-x-4 gap-y-8 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grow-0 sm:grow grid grid-cols-3 grid-rows-3 h-min md:max-w-[70%]">
          <Image className="" src='/assets/truck/bell1.webp' alt="bellingham food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/bell2.webp' alt="bellingham food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/bell3.webp' alt="bellingham food truck" width={999} height={999}/>

          <Image className="" src='/assets/truck/everson1.webp' alt="everson food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/everson2.webp' alt="everson food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/everson3.webp' alt="everson food truck" width={999} height={999}/>

          <Image className="" src='/assets/truck/blaine1.webp' alt="blaine food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/blaine2.webp' alt="blaine food truck" width={999} height={999}/>
          <Image className="" src='/assets/truck/blaine3.webp' alt="blaine food truck" width={999} height={999}/>
        </div>
        <div className="flex flex-col w-full md:w-auto py-4 sm:py-0">
          <div className="flex flex-col text-lg sm:text-2xl text-left md:text-right gap-3">
            <div className="text-2xl sm:text-3xl font-bold text-left sm:text-right">Locations</div>
            <div className="flex flex-col px-2 border-x-4 border-flagGreen">
              <div>A Que Tacos:</div>
              <address>2620 Northwest Ave, Bellingham, WA 98225</address>
            </div>
            <div className="flex flex-col px-2 border-x-4 border-white">
              <div>A Que Tacos Two:</div>
              <address>117 W Main St, Everson, WA 98247</address>
            </div>
            <div className="flex flex-col px-2 border-x-4 border-flagRed">
              <div>A Que Tacos Three:</div>
              <address>8101 Blaine Rd, Blaine, WA 98230</address>
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-left sm:text-right mt-6">Hours</div>
          <div className="flex flex-col text-lg sm:text-2xl gap-x-4 text-left sm:text-right my-2">
            <div>Mon: 11am - 8pm</div>
            <div>Tue: 11am - 8pm</div>
            <div>Wed: 11am - 8pm</div>
            <div>Thu: 11am - 8pm</div>
            <div>Fri: 11am - 8pm</div>
            <div>Sat: 11am - 8pm</div>
            <div></div>
            <div>Sun: <span className="px-5">Closed</span></div>
            <div>Sun: Bellingham Location 11am - 8pm</div>
          </div>
        </div>
      </div>
      <iframe className="w-auto " src="https://www.google.com/maps/d/u/0/embed?mid=1QK5jmswQ16ul3zeyg7WzLFp_ncZHRQg&ehbc=2E312F" width="640" height="480"/>

    </main>
  );
}
