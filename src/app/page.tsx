'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import FacebookBanner from "@/components/FacebookBanner";

const locations = [
  {
    num: "01",
    name: "Bellingham",
      day: "Mon - Sun",
    address: "2620 Northwest Ave\nBellingham, WA 98225",
    mapsUrl: "https://maps.google.com/?q=2620+Northwest+Ave+Bellingham+WA",
    img: "/assets/truck/bell2.webp",
    accentColor: "bg-[#C0392B]",
  },
  {
    num: "02",
    name: "Everson",
      day: "Mon - Sat",
    address: "117 W Main St\nEverson, WA 98247",
    mapsUrl: "https://maps.google.com/?q=117+W+Main+St+Everson+WA",
    img: "/assets/truck/everson1.webp",
    accentColor: "bg-[#1B5E38]",
  },
  {
    num: "03",
    name: "Blaine",
    day: "Mon - Sat",
    address: "8101 Blaine Rd\nBlaine, WA 98230",
    mapsUrl: "https://maps.google.com/?q=8101+Blaine+Rd+Blaine+WA",
    img: "/assets/truck/blaine1.webp",
    accentColor: "bg-[#D4B896]",
  },
];

const hours = [
  { day: "Monday", time: "11am – 8pm" },
  { day: "Tuesday", time: "11am – 8pm" },
  { day: "Wednesday", time: "11am – 8pm" },
  { day: "Thursday", time: "11am – 8pm" },
  { day: "Friday", time: "11am – 8pm" },
  { day: "Saturday", time: "11am – 8pm" },
  { day: "Sunday", time: "Bellingham only", special: true },
];

const menuItems = ["Tacos","Burritos","Plates","Quesadillas","Tortas","Tamales","Nachos","Fresh daily"];

export default function Home() {

  return (
    <main className="flex flex-col px-3 sm:px-8 gap-x-4 gap-y-8 mb-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="flex flex-col justify-center px-8 sm:px-16 py-20">
          <span className="inline-flex items-center gap-2 bg-[#E8F5ED] text-[#1B5E38] text-xs font-medium px-4 py-1.5 rounded-full mb-7 w-fit tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D7A52]" />
            Authentic Mexican — Bellingham, WA
          </span>
          <h1 className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[#3B2A1A] mb-6">
            Real flavors,<br />
            <em className="text-[#C0392B] not-italic italic">straight from</em><br />
            the truck.
          </h1>
          <p className="text-base text-[#7A6A58] leading-relaxed max-w-sm mb-10">
            Family-made tacos, burritos & plates crafted with fresh ingredients and recipes that bring Mexico to the Pacific Northwest.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/menu" className="bg-[#C0392B] hover:bg-[#922B21] text-white px-8 py-3.5 rounded-full font-medium shadow-[0_4px_16px_rgba(192,57,43,0.28)] hover:-translate-y-0.5 transition-all">
              View menu
            </Link>
            {/* <Link href="/menu" className="text-[#1B5E38] font-medium flex items-center gap-1.5 group">
              View menu <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link> */}
          </div>
        </div>
        <div className="grid grid-rows-1 bg-[#F5EDE0]">
          <div className="relative overflow-hidden border-l-4 border-[#C0392B] group">
            <Image src="/assets/truck/bell1.webp" alt="A Que Tacos truck" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4 bg-[#FDF8F2]/95 backdrop-blur border border-[#D4B896]/40 rounded-xl px-3 py-2 text-xs font-medium text-[#3B2A1A]">
              Bellingham · Est. 2024
            </div>
          </div>
          {/* <div className="relative overflow-hidden border-l-4 border-[#1B5E38] group">
            <Image src="/assets/menuImages/supremeBurrito1Final.webp" alt="Supreme Burrito" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4 bg-[#FDF8F2]/95 backdrop-blur border border-[#D4B896]/40 rounded-xl px-3 py-2 text-xs font-medium text-[#3B2A1A]">
              Supreme Burrito · $13
            </div>
          </div> */}
        </div>
      </section>


      {/* MARQUEE STRIP */}
      <div className="bg-[#1B5E38] py-3.5 overflow-hidden border-t-[3px] border-b-[3px] border-[#C0392B]">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] w-max whitespace-nowrap">
          {[...menuItems, ...menuItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2.5 text-white text-sm font-medium tracking-widest">
              <span className="w-1 h-1 rounded-full bg-[#D4B896]" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* LOCATIONS */}
      <section className=" px-8 sm:px-16 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.1em] uppercase mb-3">
              <span className="block w-6 h-px" /> Where to find us
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-black leading-tight text-[#3B2A1A]">
              Three locations,<br /><em className="text-[#C0392B]">one family.</em>
            </h2>
          </div>
          <p className="text-base max-w-xs leading-relaxed">
            From Bellingham to Blaine, find your nearest truck and come hungry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div key={loc.num} className="bg-[#FDF8F2] rounded-2xl overflow-hidden border border-[#D4B896]/35 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
              <div className={`h-1.5 ${loc.accentColor}`} />
              <div className="relative aspect-video overflow-hidden group">
                <Image src={loc.img} alt={`${loc.name} location`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="font-serif italic text-xs text-[#7A6A58] mb-1.5">Location {loc.num}</p>
                <h3 className="font-serif font-bold text-xl text-[#3B2A1A] mb-1 leading-snug">
                  A Que Tacos<br />{loc.name}
                </h3>
                <p className="text-sm text-[#7A6A58] leading-relaxed mb-5 flex-1 whitespace-pre-line">{loc.address}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#D4B896]/30">
                  <div>
                    <p className="text-xs font-semibold text-[#3B2A1A]">{loc.day}</p>
                    <p className="text-xs text-[#1B5E38] font-medium">11am – 8pm</p>
                  </div>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#C0392B] hover:bg-[#922B21] text-white text-xs font-medium px-3.5 py-2 rounded-full transition-colors">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <FacebookBanner />

    </main>
  );
}
