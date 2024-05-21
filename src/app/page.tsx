
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <header className="flex flex-row justify-between items-center p-6 w-full border-2">
        <div className="">
          <img src='assets/flag.png' className="max-h-28"/>
        </div>
        <div className="text-black text-5xl uppercase font-bold">a que tacos</div>
        <div>
          <img src='assets/menuButton.svg' />
        </div>
      </header>
      <section className="grid grid-cols-2 mt-4">
        <div className="col-span-1">
          <img src='assets/truck.jpg'/>
        </div>
        <div className="col-span-1 flex flex-col border-2 w-full py-4 px-8">
          <div className="text-4xl font-bold text-right">Location & Hours</div>
          <div className="flex flex-col text-2xl gap-x-1 text-right my-2">
            <div>Mon: 11am - 8pm</div>
            <div>Tue: 11am - 8pm</div>
            <div>Wed: 11am - 8pm</div>
            <div>Thu: 11am - 8pm</div>
            <div>Fri: 11am - 8pm</div>
            <div>Sat: 11am - 8pm</div>
            <div>Sun: <span className="px-5">Closed</span></div>
            <div className="col-span-2 mt-3">8101 Blaine Rd, Blaine, WA 98230</div>
          </div>
        </div>
      </section>
    </main>
  );
}
