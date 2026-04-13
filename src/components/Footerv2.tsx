'use client'

const Footerv2 = () => {
  return (
      <footer className="bg-[#3B2A1A] text-white/60 px-16 py-8 flex items-center justify-between flex-wrap gap-4">
        <span className="font-serif font-black text-lg text-white">A Que Tacos</span>
        <span className="text-sm">© 2025 A Que Tacos. All rights reserved.</span>
        <a href="mailto:contact@aquetacos.com" className="text-[#D4B896] text-sm hover:text-white transition-colors">contact@aquetacos.com</a>
      </footer>
  )
}

export default Footerv2;