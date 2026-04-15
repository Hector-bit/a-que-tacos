// components/FacebookBanner.tsx
import Link from "next/link";

export default function FacebookBanner() {
  return (
    <div className="bg-[#261508] w-full grid grid-cols-[7px_1fr_7px] overflow-hidden">

      {/* Top red bar */}
      <div className="col-span-3 h-[7px] bg-[#801313]" />

      {/* Left stripe */}
      <div className="bg-[#801313]" />

      {/* Main content */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 px-12 py-10">

        {/* Left — branding */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#D4B896]">
            Authentic Mexican · Bellingham, WA
          </p>
          <div className="w-36 h-px bg-[#801313]" />
          <p className="font-serif text-[2.6rem] font-black leading-tight tracking-tight">
            <span className="text-[#FDF8F2]">A Que </span>
            <span className="text-[#801313]">Tacos</span>
          </p>
          <p className="text-sm text-[#a08060] font-light tracking-wide">
            Real flavors, straight from the truck.
          </p>
          <div className="flex items-center gap-4 mt-1">
            {["Bellingham", "Everson", "Blaine"].map((loc) => (
              <div key={loc} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#801313] flex-shrink-0" />
                <span className="text-[11px] text-[#7a6a58] tracking-wide">{loc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px sm:h-24 bg-[#2e1a0a] flex-shrink-0" />

        {/* Right — Facebook CTA */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#4a3020]">
            Follow us
          </p>
          <Link
            href="https://www.facebook.com/profile.php?id=61558923898407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#801313] hover:bg-[#5a0d0d] text-[#FDF8F2] px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <FacebookIcon />
            A Que Tacos on Facebook
          </Link>
          <p className="text-[10px] text-[#3d1e08] tracking-wide">aquetacos.com</p>
        </div>

      </div>

      {/* Right stripe */}
      <div className="bg-[#801313]" />

      {/* Bottom red bar */}
      <div className="col-span-3 h-[7px] bg-[#801313]" />

    </div>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}