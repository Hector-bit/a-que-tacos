export default function Menu() {
  const imgBase = 'assets/menuImages'
  
  const menu_items = [
    { img: `${imgBase}/burritoFishFinal.jpg`, name: 'taco fish', price: 2.10 },
    { img: `${imgBase}/burritoRegularFinal.jpg`, name: 'taco asada', price: 4.10 },
    { img: `${imgBase}/burritoVeggie4Final.jpg`, name: 'taco chicken', price: 1.30 },
    { img: `${imgBase}/supremeBurrito1Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/nacho3Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/platefish1Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/plateTamale3Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/plateVeggie1Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/quesadillaFinal.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/salad3Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/taco1Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/tacoFish2Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/tacoVeggie1Final.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/tortaFinal.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/jarritosFinal.jpg`, name: 'taco pollo', price: 2.75 },
    { img: `${imgBase}/horchataOneFinal.jpg`, name: 'taco pollo', price: 2.75 },
  ]

  return (
    <main className="flex flex-col items-center justify-between p-6 bg-primary">
      menu
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {menu_items.map((item) => (
          <div className="border-2 rounded-lg">
            <img className="rounded-lg" src={item.img} alt={`item ${item.name}`} />
            <div>{item.name}: {item.price}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
