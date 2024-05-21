
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-primary">
      <header className="flex flex-row justify-between items-center p-6 w-full border-2 border-slate-500">
        <div>
          <img src='assets/flag.png'/>
        </div>
        <div className="text-black text-5xl uppercase">a que tacos</div>
        <div>
          <img src='assets/menuButton.svg' />
        </div>
      </header>
      <div></div>
    </main>
  );
}
