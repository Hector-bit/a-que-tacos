'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {


  // console.log('yuhhhh')
  // console.log(process.env.NEXT_PUBLIC_IS_PRODUCTION, 'yuhhhh')

  return (
    <main className="flex flex-col sm:flex-row px-3 sm:px-8 gap-x-4">
      <div className="grow-0 sm:grow">
        <Image className="w-full max-w-[600px] h-auto mx-auto sm:mx-0" src='/assets/truck.jpg' alt="food truck" width={999} height={999}/>
      </div>
      <div className="flex flex-col w-full sm:w-fit py-4 sm:py-0">
        <div className="flex flex-col text-lg sm:text-2xl text-left sm:text-right gap-3">
          <div className="text-2xl sm:text-3xl font-bold text-left sm:text-right">Location links</div>
          <a className="flex flex-col px-2 border-x-4 border-flagGreen" href="https://maps.app.goo.gl/TV7Q6t4ghB4GtFpQ9">
            <div>A Que Tacos:</div>
            <address>1315 W Connecticut St, Bellingham, WA 98225</address>
          </a>
          <a className="flex flex-col px-2 border-x-4 border-white" href="https://maps.app.goo.gl/aoEUDDNcCSM9yKJC8">
            <div>A Que Tacos Two:</div>
            <address>8101 Blaine Rd, Blaine, WA 98230</address>
          </a>
          <a className="flex flex-col px-2 border-x-4 border-flagRed" href="https://maps.app.goo.gl/pKbf5SVuCk7nyL817">
            <div>A Que Tacos Three:</div>
            <address>117 W Main St, Everson, WA 98247</address>
          </a>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-left sm:text-right mt-6">Hours {'(for all trucks)'}</div>
        <div className="flex flex-col text-lg sm:text-2xl gap-x-4 text-left sm:text-right my-2">
          <div>Mon: 11am - 8pm</div>
          <div>Tue: 11am - 8pm</div>
          <div>Wed: 11am - 8pm</div>
          <div>Thu: 11am - 8pm</div>
          <div>Fri: 11am - 8pm</div>
          <div>Sat: 11am - 8pm</div>
          <div>Sun: <span className="px-5">Closed</span></div>
        </div>
      </div>
    </main>
  );
}
