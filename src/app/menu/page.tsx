'use client'
import MenuCard from "@/components/MenuCard";
import { menu_items, MenuNameDictionary } from "../../../utils/constants";

export default function Menu() {

  return (
<>

<div className="cat-nav-wrap">
  <div className="cat-nav">
    <button className="cat-btn active" >Tacos</button>
    <button className="cat-btn" >Burritos</button>
    <button className="cat-btn" >Quesadillas</button>
    <button className="cat-btn" >Tortas</button>
    <button className="cat-btn" >Drinks</button>
  </div>
</div>

<div className="menu-hero">
  <div className="menu-hero-left">
    <p className="eyebrow">A Que Tacos</p>
    <h1>Our <em>Menu</em></h1>
  </div>
  {/* <div className="menu-hero-right">
    <span className="location-pill">Bellingham</span>
    <span className="location-pill">Everson</span>
    <span className="location-pill">Blaine</span>
  </div> */}
</div>

<div className="menu-body">
  {/* <!-- Desktop Sidebar --> */}
  <aside className="sidebar">
    <div className="sidebar-label">Categories</div>
    <a href="#tacos" className="sidebar-link active" >Tacos</a>
    <a href="#burritos" className="sidebar-link" >Burritos</a>
    <a href="#quesadillas" className="sidebar-link" >Quesadillas</a>
    <a href="#tortas" className="sidebar-link" >Tortas</a>
    <a href="#drinks" className="sidebar-link" >Drinks</a>
    <div className="sidebar-divider"></div>
    {/* <div className="sidebar-label">Locations</div>
    <a href="#" className="sidebar-link">Bellingham</a>
    <a href="#" className="sidebar-link">Everson</a>
    <a href="#" className="sidebar-link">Blaine</a> */}
  </aside>

  <main className="menu-main">

    {/* <!-- TACOS --> */}
    <section className="menu-section" id="tacos">
      <div className="section-heading">
        <h2>Tacos</h2>
        <span className="cat-count">6 items</span>
      </div>
      <div className="items-grid">

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Carne Asada</div>
            <div className="item-desc">Grilled marinated beef, cilantro, white onion, salsa verde, lime.</div>
            <div className="item-footer"><span className="item-price">$4.50</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Al Pastor</div>
            <div className="item-desc">Achiote-marinated pork, pineapple, onion, cilantro, salsa roja.</div>
            <div className="item-footer"><span className="item-price">$4.50</span><span className="item-tag spicy">Spicy</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Pollo</div>
            <div className="item-desc">Grilled chicken, guacamole, pico de gallo, crema, cotija.</div>
            <div className="item-footer"><span className="item-price">$4.50</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Carnitas</div>
            <div className="item-desc">Slow-braised pork, pickled onion, salsa verde, fresh lime.</div>
            <div className="item-footer"><span className="item-price">$4.50</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Lengua</div>
            <div className="item-desc">Tender beef tongue, cilantro, white onion, house salsa.</div>
            <div className="item-footer"><span className="item-price">$5.00</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌮</span></div>
          <div className="item-info">
            <div className="item-name">Birria</div>
            <div className="item-desc">Braised beef in rich consommé, dipped tortilla, onion, cilantro.</div>
            <div className="item-footer"><span className="item-price">$5.50</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- BURRITOS --> */}
    <section className="menu-section" id="burritos">
      <div className="section-heading">
        <h2>Burritos</h2>
        <span className="cat-count">4 items</span>
      </div>
      <div className="items-grid">

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌯</span></div>
          <div className="item-info">
            <div className="item-name">Carne Asada Burrito</div>
            <div className="item-desc">Grilled beef, rice, beans, cheese, crema, pico de gallo in a flour tortilla.</div>
            <div className="item-footer"><span className="item-price">$12.00</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌯</span></div>
          <div className="item-info">
            <div className="item-name">Al Pastor Burrito</div>
            <div className="item-desc">Marinated pork, pineapple, rice, beans, salsa roja, cotija cheese.</div>
            <div className="item-footer"><span className="item-price">$12.00</span><span className="item-tag spicy">Spicy</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌯</span></div>
          <div className="item-info">
            <div className="item-name">Pollo Burrito</div>
            <div className="item-desc">Grilled chicken, rice, black beans, guac, crema, jalapeños.</div>
            <div className="item-footer"><span className="item-price">$11.50</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🌯</span></div>
          <div className="item-info">
            <div className="item-name">Veggie Burrito</div>
            <div className="item-desc">Grilled peppers, onions, zucchini, rice, beans, cheese, guacamole.</div>
            <div className="item-footer"><span className="item-price">$10.50</span><span className="item-tag">Veggie</span></div>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- QUESADILLAS --> */}
    <section className="menu-section" id="quesadillas">
      <div className="section-heading">
        <h2>Quesadillas</h2>
        <span className="cat-count">3 items</span>
      </div>
      <div className="items-grid">

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🫓</span></div>
          <div className="item-info">
            <div className="item-name">Quesadilla de Pollo</div>
            <div className="item-desc">Flour tortilla, grilled chicken, Oaxacan cheese, crema, pico de gallo.</div>
            <div className="item-footer"><span className="item-price">$10.00</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🫓</span></div>
          <div className="item-info">
            <div className="item-name">Quesadilla de Carne</div>
            <div className="item-desc">Flour tortilla, carne asada, Oaxacan cheese, jalapeños, salsa verde.</div>
            <div className="item-footer"><span className="item-price">$11.00</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🫓</span></div>
          <div className="item-info">
            <div className="item-name">Quesadilla de Queso</div>
            <div className="item-desc">Flour tortilla, blend of melted cheeses, guacamole, crema. Simple & delicious.</div>
            <div className="item-footer"><span className="item-price">$8.50</span><span className="item-tag">Veggie</span></div>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- TORTAS --> */}
    <section className="menu-section" id="tortas">
      <div className="section-heading">
        <h2>Tortas</h2>
        <span className="cat-count">3 items</span>
      </div>
      <div className="items-grid">

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥪</span></div>
          <div className="item-info">
            <div className="item-name">Torta de Carnitas</div>
            <div className="item-desc">Telera roll, slow-braised pork, avocado, jalapeños, tomato, crema.</div>
            <div className="item-footer"><span className="item-price">$11.00</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥪</span></div>
          <div className="item-info">
            <div className="item-name">Torta de Milanesa</div>
            <div className="item-desc">Crispy breaded beef, lettuce, tomato, avocado, chipotle mayo.</div>
            <div className="item-footer"><span className="item-price">$12.00</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥪</span></div>
          <div className="item-info">
            <div className="item-name">Torta de Pollo</div>
            <div className="item-desc">Grilled chicken breast, avocado, cheese, pickled jalapeños, crema.</div>
            <div className="item-footer"><span className="item-price">$11.00</span></div>
          </div>
        </div>

      </div>
    </section>

    {/* <!-- DRINKS --> */}
    <section className="menu-section" id="drinks">
      <div className="section-heading">
        <h2>Drinks</h2>
        <span className="cat-count">4 items</span>
      </div>
      <div className="items-grid">

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥤</span></div>
          <div className="item-info">
            <div className="item-name">Agua de Horchata</div>
            <div className="item-desc">ClassNameic rice milk with cinnamon, vanilla, and a touch of sweetness.</div>
            <div className="item-footer"><span className="item-price">$3.00</span><span className="item-tag">Popular</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥤</span></div>
          <div className="item-info">
            <div className="item-name">Mexican Coke</div>
            <div className="item-desc">Glass bottle Coca-Cola made with real cane sugar. Ice cold.</div>
            <div className="item-footer"><span className="item-price">$3.50</span></div>
          </div>
        </div>

        <div className="item-card">
          <div className="item-img-placeholder"><span className="placeholder-icon">🥤</span></div>
          <div className="item-info">
            <div className="item-name">Jarritos</div>
            <div className="item-desc">Assorted Mexican fruit sodas. Ask your server for today's flavors.</div>
            <div className="item-footer"><span className="item-price">$3.00</span></div>
          </div>
        </div>

      </div>
    </section>

  </main>
</div>

{/* <!-- Floating Order Button --> */}
{/* <a href="https://aquetacos.com/create-order" className="order-float">
  <span className="order-float-dot"></span>
  Order Online
</a> */}


</>
  );
}
