export default function Menu() {

  const menu_items = [
    { img: 'assets/truck.jpg', name: 'taco fish', price: 2.10 },
    { img: 'assets/truck.jpg', name: 'taco asada', price: 4.10 },
    { img: 'assets/truck.jpg', name: 'taco chicken', price: 1.30 },
    { img: 'assets/truck.jpg', name: 'taco pollo', price: 2.75 },
  ]

  return (
    <main className="flex flex-col items-center justify-between p-24 bg-primary">
      menu
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
