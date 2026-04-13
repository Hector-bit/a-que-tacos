'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  return (
  <>


  <section className="hero">
    <div className="hero-left">
      <div className="hero-tag">
        <div className="flag-icon"><span className="flag-green"></span><span className="flag-white"></span><span className="flag-red"></span></div>
        Authentic Mexican · Pacific Northwest
      </div>
      <h1>Tacos<br/>Worth the <em>Drive.</em></h1>
      <p className="hero-desc">Three locations across Bellingham, Everson, and Blaine — serving honest, bold flavors straight from the heart of Mexico.</p>
      <div className="hero-actions">
        {/* <a href="https://aquetacos.com/create-order" className="btn-primary">Order Online</a> */}
        <a href="https://aquetacos.com/menu" className="btn-primary">View Menu <span className="arrow">→</span></a>
      </div>
    </div>
    <div className="hero-right">
      <div className="hero-img-grid">
        <div className="hero-img-cell"><img src="https://aquetacos.com/_next/image?url=%2Fassets%2Ftruck%2Fbell1.webp&w=800&q=75" alt="Bellingham truck" /></div>
        <div className="hero-img-cell"><img src="https://aquetacos.com/_next/image?url=%2Fassets%2Ftruck%2Feverson2.webp&w=800&q=75" alt="Everson truck" /></div>
        <div className="hero-img-cell"><img src="https://aquetacos.com/_next/image?url=%2Fassets%2Ftruck%2Fblaine1.webp&w=800&q=75" alt="Blaine truck" /></div>
        <div className="hero-img-cell"><img src="https://aquetacos.com/_next/image?url=%2Fassets%2Ftruck%2Fbell3.webp&w=800&q=75" alt="Bellingham truck 2" /></div>
      </div>
      <div className="hero-overlay-badge">
        <p>Now Serving</p>
        <strong>3 Locations</strong>
      </div>
    </div>
  </section>

  <div className="marquee-strip">
    <div className="marquee-inner">
      <span>Tacos</span><span className="dot">◆</span>
      <span>Burritos</span><span className="dot">◆</span>
      <span>Quesadillas</span><span className="dot">◆</span>
      <span>Bellingham</span><span className="dot">◆</span>
      <span>Everson</span><span className="dot">◆</span>
      <span>Blaine</span><span className="dot">◆</span>
      <span>Authentic Mexican</span><span className="dot">◆</span>
      <span>Mon–Sat 11am–8pm</span><span className="dot">◆</span>
      <span>Tacos</span><span className="dot">◆</span>
      <span>Burritos</span><span className="dot">◆</span>
      <span>Quesadillas</span><span className="dot">◆</span>
      <span>Bellingham</span><span className="dot">◆</span>
      <span>Everson</span><span className="dot">◆</span>
      <span>Blaine</span><span className="dot">◆</span>
      <span>Authentic Mexican</span><span className="dot">◆</span>
      <span>Mon–Sat 11am–8pm</span><span className="dot">◆</span>
    </div>
  </div>

  <section className="locations">
    <div className="section-header">
      <div>
        <p className="section-label">Find Us</p>
        <h2 className="section-title">Our <em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Locations</em></h2>
      </div>
    </div>
    <div className="locations-grid">
      <div className="location-card">
        <div className="loc-num">01</div>
        <div className="loc-name">A Que Tacos</div>
        <div className="loc-addr">2620 Northwest Ave<br/>Bellingham, WA 98225</div>
        <div className="loc-divider"></div>
        <div className="loc-hours-label">Hours</div>
        <div className="loc-hours-text">All Week 11am–8pm</div>
        <div className="loc-icon">↗</div>
      </div>
      <div className="location-card">
        <div className="loc-num">02</div>
        <div className="loc-name">A Que Tacos Two</div>
        <div className="loc-addr">117 W Main St<br/>Everson, WA 98247</div>
        <div className="loc-divider"></div>
        <div className="loc-hours-label">Hours</div>
        <div className="loc-hours-text">Mon–Sat 11am–8pm</div>
        <div className="loc-icon">↗</div>
      </div>
      <div className="location-card">
        <div className="loc-num">03</div>
        <div className="loc-name">A Que Tacos Three</div>
        <div className="loc-addr">8101 Blaine Rd<br/>Blaine, WA 98230</div>
        <div className="loc-divider"></div>
        <div className="loc-hours-label">Hours</div>
        <div className="loc-hours-text">Mon–Sat 11am–8pm</div>
        <div className="loc-icon">↗</div>
      </div>
    </div>
  </section>

  <section className="hours-section">
    <div>
      <p className="section-label" style={{ color: 'rgba(255,188,96,0.7)' }}>When to Visit</p>
      <h2 className="section-title" style={{ color: 'var(--bg)' }}>Hours &amp; <em style={{ fontStyle: 'italic', color: 'rgba(255,188,96,0.4)' }}>Schedule</em></h2>
    </div>
    <div>
      <div className="hours-table">
        <div className="hours-row"><span className="day-name">Monday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Tuesday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Wednesday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Thursday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Friday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Saturday</span><span className="day-hours">11am – 8pm</span></div>
        <div className="hours-row"><span className="day-name">Sunday</span><span className="day-hours day-closed">Closed</span></div>
      </div>
      <div className="hours-note">★ Bellingham location open Sundays 11am – 8pm</div>
    </div>
  </section>

  <section className="menu-cta">
    <div className="menu-cta-text">
      <p className="section-label">Hungry?</p>
      <h2>Ready to Order? <em>Let's Eat.</em></h2>
    </div>
    <div className="menu-cta-actions">
      <a href="https://aquetacos.com/menu" className="btn-outline">View Menu</a>
      {/* <a href="https://aquetacos.com/create-order" className="btn-primary">Order Online</a> */}
    </div>
  </section>

  <footer>
    <div className="footer-brand">
      <div className="flag-icon"><span className="flag-green"></span><span className="flag-white"></span><span className="flag-red"></span></div>
      A Que Tacos
    </div>
    <div className="footer-center">
      <a href="https://www.facebook.com/profile.php?id=61558923898407" className="footer-link">Facebook</a>
      <a href="mailto:contact@aquetacos.com" className="footer-link">Contact</a>
    </div>
    <div className="footer-right">
      <a href="mailto:contact@aquetacos.com">contact@aquetacos.com</a>
    </div>
  </footer>

  </>
  );
}
