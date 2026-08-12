// RevPartners Website — Header / Nav Component
// Based on Figma: /Components/components/HeaderMenu/HeaderMenu.jsx
// 1440px wide, 95px tall, Off White bg, green logo, pill CTA

Object.assign(window, { RPHeader });

function RPHeader({ activePage = "services" }) {
  const links = [
    { id: "revops",   label: "RevOps" },
    { id: "hubspot",  label: "HubSpot" },
    { id: "clay",     label: "Clay" },
    { id: "solutions",label: "Solutions" },
    { id: "resources",label: "Resources" },
    { id: "rpx",      label: "RPX" },
  ];
  return (
    <header style={headerStyles.nav}>
      {/* Logo */}
      <div style={headerStyles.logoWrap}>
        <img src={window.__resources.logoGreen} alt="RevPartners"
          style={headerStyles.logo}
          onError={e => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }} />
        <span style={{...headerStyles.logoFallback, display:"none"}}>RevPartners</span>
      </div>
      {/* Nav links + CTA */}
      <div style={headerStyles.right}>
        <nav style={headerStyles.links}>
          {links.map(l => (
            <a key={l.id} href="#"
              style={{...headerStyles.link, ...(activePage===l.id ? headerStyles.linkActive : {})}}>
              {l.label}
            </a>
          ))}
        </nav>
        <button style={headerStyles.cta}
          onMouseEnter={e => Object.assign(e.currentTarget.style, {background:"rgba(23,180,81,0.2)",color:"#17B451"})}
          onMouseLeave={e => Object.assign(e.currentTarget.style, {background:"#17B451",color:"#FDFDFD"})}>
          Contact Us
        </button>
      </div>
    </header>
  );
}

const headerStyles = {
  nav: {
    width: "100%", height: 95, background: "#FDFDFD",
    borderBottom: "1px solid rgba(36,39,58,0.1)",
    display: "flex", flexDirection: "row",
    alignItems: "center", justifyContent: "space-between",
    padding: "0 120px", boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  },
  logoWrap: { display: "flex", alignItems: "center" },
  logo: { height: 30, width: "auto" },
  logoFallback: { fontFamily: "'Montserrat',sans-serif", fontWeight:700, fontSize:22, color:"#17B451" },
  right: { display: "flex", alignItems: "center", gap: 28 },
  links: { display: "flex", gap: 24, alignItems: "center" },
  link: {
    fontFamily: "'Inter',sans-serif", fontSize: 16, fontWeight: 600,
    color: "#434761", textDecoration: "none", cursor: "pointer",
    padding: "4px 0", borderBottom: "2px solid transparent",
    transition: "color 0.15s",
  },
  linkActive: { color: "#17B451", borderBottom: "2px solid #17B451" },
  cta: {
    borderRadius: 120, background: "#17B451",
    border: "2px solid #17B451", color: "#FDFDFD",
    fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: 16,
    padding: "11px 28px", cursor: "pointer", transition: "all 0.15s",
  },
};
