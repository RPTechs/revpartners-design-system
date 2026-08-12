// RevPartners Website — Reusable Section Components
// Card recipe: 2px border (accent OR neutral stroke) + tinted/bg-2 fill,
// icon sits directly on surface (no background), Inter fancy link with arrow.
// Steps: filled circles (accent cycle), white numerals, dashed connectors.

Object.assign(window, { TextImageSection, ServiceCard, StatCard, CTABanner, ServiceGrid, DiagramSection });

const ACCENTS = ["#17B452", "#329DFF", "#F7761E", "#FB3131", "#8C32FF"];
const tint = { "#17B452":"rgba(23,180,82,0.08)", "#329DFF":"rgba(50,157,255,0.08)", "#F7761E":"rgba(247,118,30,0.08)", "#FB3131":"rgba(251,49,49,0.08)", "#8C32FF":"rgba(140,50,255,0.08)" };

/* ── Fancy link — Inter, arrow included ── */
function FancyLink({ children, color = "#17B452" }) {
  return (
    <a href="#" style={{fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:15, color, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6}}
      onMouseEnter={e => { const a=e.currentTarget.querySelector('span'); if(a) a.style.transform="translateX(3px)"; }}
      onMouseLeave={e => { const a=e.currentTarget.querySelector('span'); if(a) a.style.transform="translateX(0)"; }}>
      {children} <span style={{fontFamily:"'Inter',sans-serif", transition:"transform 0.15s ease"}}>&rarr;</span>
    </a>
  );
}

/* ── Text + Image Section ── */
function TextImageSection({ eyebrow, title, body, cta, ctaSecondary, bg = "#FDFDFD", flip = false }) {
  return (
    <section style={{...sectionStyles.section, background: bg, flexDirection: flip ? "row-reverse" : "row"}}>
      <div style={sectionStyles.textCol}>
        {eyebrow && <div style={sectionStyles.eyebrow}>{eyebrow}</div>}
        <h2 style={sectionStyles.h2}>{title}</h2>
        <p style={sectionStyles.body}>{body}</p>
        <div style={sectionStyles.actions}>
          {cta && <button style={sectionStyles.btnPrimary}
            onMouseEnter={e=>Object.assign(e.currentTarget.style,{background:"rgba(23,180,82,0.2)",color:"#17B452"})}
            onMouseLeave={e=>Object.assign(e.currentTarget.style,{background:"#17B452",color:"#FDFDFD"})}>
            {cta}
          </button>}
          {ctaSecondary && <FancyLink>{ctaSecondary}</FancyLink>}
        </div>
      </div>
      <div style={sectionStyles.imageCol}>
        <ImagePlaceholder />
      </div>
    </section>
  );
}

/* ── Image placeholder — the site uses proprietary hand-drawn schematic
      illustrations we don't recreate; this marks where one belongs. ── */
function ImagePlaceholder() {
  return (
    <div style={{width:"100%", maxWidth:440, aspectRatio:"4 / 3", borderRadius:12,
      border:"2px dashed rgba(36,39,58,0.2)", background:"#F3F3F4",
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:10}}>
      <span className="material-symbols-rounded" style={{fontSize:40, color:"#A1A2A7"}}>draw</span>
      <span style={{fontFamily:"'Inter',sans-serif", fontSize:13, color:"#A1A2A7", fontWeight:600}}>Brand illustration</span>
    </div>
  );
}

/* ── Service Card — 2px accent border, tinted fill, bare icon ── */
function ServiceCard({ color = "#17B452", icon, title, body, link, neutral = false }) {
  const borderColor = neutral ? "rgba(36,39,58,0.2)" : color;
  const bg = neutral ? "#F3F3F4" : (tint[color] || tint["#17B452"]);
  const iconColor = neutral ? "#24273A" : color;
  return (
    <div style={{...sectionStyles.serviceCard, borderColor, background: bg}}>
      <span className="material-symbols-rounded" style={{fontSize:32, color:iconColor, marginBottom:4}}>{icon}</span>
      <h3 style={sectionStyles.cardTitle}>{title}</h3>
      <p style={sectionStyles.cardBody}>{body}</p>
      {link && <FancyLink color={neutral ? "#17B452" : color}>{link}</FancyLink>}
    </div>
  );
}

/* ── Stat Card — single accent, light tint fill (no dark backgrounds) ── */
function StatCard({ number, label, accent = "#17B452" }) {
  const t = tint[accent] || tint["#17B452"];
  return (
    <div style={{...sectionStyles.statCard, borderColor: accent, background: t}}>
      <div style={{...sectionStyles.statNum, color: accent}}>{number}</div>
      <div style={sectionStyles.statLabel}>{label}</div>
    </div>
  );
}

/* ── CTA Banner ── */
function CTABanner({ title, body, cta }) {
  return (
    <section style={sectionStyles.ctaBanner}>
      <div style={sectionStyles.ctaInner}>
        <h2 style={{...sectionStyles.h2, color:"#FDFDFD", marginBottom:8}}>{title}</h2>
        <p style={{...sectionStyles.body, color:"rgba(253,253,253,0.75)", marginBottom:24}}>{body}</p>
        <button style={{...sectionStyles.btnPrimary, background:"#FDFDFD", color:"#17B452", borderColor:"#FDFDFD"}}>
          {cta}
        </button>
      </div>
    </section>
  );
}

/* ── Service Grid ── */
function ServiceGrid({ services }) {
  return (
    <section style={sectionStyles.serviceSection}>
      <div style={sectionStyles.sectionInner}>
        <div style={sectionStyles.serviceGrid}>
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Diagram / Steps Section — filled circles, accent cycle, dashed lines ── */
function DiagramSection({ title, body, steps }) {
  return (
    <section style={{...sectionStyles.section, flexDirection:"column", alignItems:"center", background:"#F3F3F4", padding:"80px 120px"}}>
      <div style={{textAlign:"center", maxWidth:600, marginBottom:48}}>
        <h2 style={sectionStyles.h2}>{title}</h2>
        <p style={sectionStyles.body}>{body}</p>
      </div>
      <div style={{display:"flex", alignItems:"flex-start", width:"100%", maxWidth:900}}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{flex:"0 0 130px", display:"flex", flexDirection:"column", alignItems:"center", gap:12}}>
              <div style={{
                width:56, height:56, borderRadius:"50%",
                background: ACCENTS[i % ACCENTS.length], border:"none",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:20, color:"#FFFFFF",
              }}>{s.num}</div>
              <div style={{fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:15, color:"#24273A", textAlign:"center"}}>{s.label}</div>
              <div style={{fontFamily:"'Inter',sans-serif", fontSize:13, color:"#434761", textAlign:"center", maxWidth:120, lineHeight:1.4}}>{s.desc}</div>
            </div>
            {i < steps.length-1 && (
              <div style={{flex:1, borderTop:"2px dashed rgba(36,39,58,0.25)", marginTop:28}}/>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

const sectionStyles = {
  section: { width:"100%", display:"flex", flexDirection:"row", gap:80, padding:"80px 120px", boxSizing:"border-box", alignItems:"center" },
  textCol: { flex:"0 0 480px", display:"flex", flexDirection:"column", gap:20 },
  imageCol: { flex:1, display:"flex", alignItems:"center", justifyContent:"center" },
  eyebrow: { fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:14, letterSpacing:"0.4em", textTransform:"uppercase", color:"#17B452" },
  h2: { fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:40, lineHeight:1.2, color:"#24273A", margin:0 },
  body: { fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:18, lineHeight:1.7, color:"#434761", margin:0 },
  actions: { display:"flex", gap:24, alignItems:"center", flexWrap:"wrap" },
  btnPrimary: { borderRadius:120, background:"#17B452", border:"2px solid #17B452", color:"#FDFDFD", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:16, padding:"13px 32px", cursor:"pointer", transition:"all 0.15s" },
  serviceSection: { width:"100%", padding:"80px 120px", boxSizing:"border-box", background:"#FDFDFD" },
  sectionInner: { maxWidth:1200, margin:"0 auto" },
  serviceGrid: { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 },
  serviceCard: { borderRadius:12, border:"2px solid", padding:24, display:"flex", flexDirection:"column", gap:10, alignItems:"flex-start" },
  cardTitle: { fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:19, lineHeight:1.2, color:"#24273A", margin:0 },
  cardBody: { fontFamily:"'Inter',sans-serif", fontSize:15, lineHeight:1.6, color:"#434761", margin:0, flex:1 },
  statCard: { border:"2px solid", borderRadius:12, padding:"28px 24px", display:"flex", flexDirection:"column", gap:8 },
  statNum: { fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:42, lineHeight:1 },
  statLabel: { fontFamily:"'Inter',sans-serif", fontSize:14, color:"#434761", lineHeight:1.5 },
  ctaBanner: { width:"100%", background:"#24273A", padding:"72px 120px", boxSizing:"border-box" },
  ctaInner: { maxWidth:640 },
};
