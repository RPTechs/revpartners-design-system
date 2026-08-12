// RevPartners Website — Hero
// Recreation of revpartners.io hero: dark navy, "Grow with Confidence"
// eyebrow, big Montserrat SemiBold headline, RPM callout, green CTA + logo strip.

Object.assign(window, { RPHero });

function RPHero() {
  const logos = ["eventbrite", "zoom", "spectrum voip", "gardaworld", "midtown", "snappt"];
  return (
    <section style={heroStyles.section}>
      {/* subtle brand dashed-elbow motif, top-right */}
      <svg style={heroStyles.motif} viewBox="0 0 200 160" fill="none" aria-hidden="true">
        <path d="M10 20 H150 V150" stroke="#17B452" strokeWidth="2" strokeDasharray="6 8" opacity="0.5"/>
      </svg>

      <div style={heroStyles.content}>
        <div style={heroStyles.eyebrow}>Grow with Confidence</div>
        <h1 style={heroStyles.headline}>
          RevOps + GTM Engineering for Businesses on <span style={{color:"#17B452"}}>HubSpot</span> and <span style={{color:"#17B452"}}>Clay</span>
        </h1>
        <p style={heroStyles.sub}>
          When growth stalls, clarity matters. We created the Revenue Performance Model™ to help GTM teams measure and accelerate revenue across the customer journey.
        </p>
        <div style={heroStyles.actions}>
          <button style={heroStyles.cta}
            onMouseEnter={e => Object.assign(e.currentTarget.style, {background:"rgba(23,180,82,0.2)", color:"#17B452"})}
            onMouseLeave={e => Object.assign(e.currentTarget.style, {background:"#17B452", color:"#FDFDFD"})}>
            <span className="material-symbols-rounded" style={{fontSize:20}}>arrow_forward</span>
            Get a Free Revenue Health Check
          </button>
          <a href="#" style={heroStyles.link}>
            Show me the RPM™ <span style={{fontFamily:"'Inter',sans-serif"}}>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Trusted-by strip */}
      <div style={heroStyles.trust}>
        <div style={heroStyles.trustLabel}>Trusted by the leading B2B brands on HubSpot</div>
        <div style={heroStyles.logoRow}>
          {logos.map(l => (
            <div key={l} style={heroStyles.logoCell}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

const heroStyles = {
  section: {
    position:"relative", width:"100%", background:"#24273A",
    padding:"96px 120px 48px", boxSizing:"border-box", overflow:"hidden",
  },
  motif: { position:"absolute", top:0, right:0, width:280, height:220, pointerEvents:"none" },
  content: { position:"relative", zIndex:2, maxWidth:860, display:"flex", flexDirection:"column", gap:24 },
  eyebrow: {
    fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:14,
    letterSpacing:"0.4em", textTransform:"uppercase", color:"#17B452",
  },
  headline: {
    fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:52,
    lineHeight:1.12, color:"#FDFDFD", margin:0, letterSpacing:"-0.01em",
  },
  sub: {
    fontFamily:"'Inter',sans-serif", fontWeight:400, fontSize:19,
    lineHeight:1.65, color:"rgba(253,253,253,0.72)", margin:0, maxWidth:640,
  },
  actions: { display:"flex", gap:28, alignItems:"center", flexWrap:"wrap", marginTop:8 },
  cta: {
    borderRadius:120, background:"#17B452", border:"2px solid #17B452",
    color:"#FDFDFD", fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:16,
    padding:"13px 30px", cursor:"pointer", transition:"all 0.15s",
    display:"inline-flex", alignItems:"center", gap:8,
  },
  link: {
    fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:16,
    color:"#FDFDFD", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:8,
  },
  trust: {
    position:"relative", zIndex:2, marginTop:64,
    borderTop:"1px solid rgba(253,253,253,0.12)", paddingTop:32,
    display:"flex", flexDirection:"column", gap:20,
  },
  trustLabel: {
    fontFamily:"'Inter',sans-serif", fontSize:13, fontWeight:600,
    color:"rgba(253,253,253,0.5)", textAlign:"center",
  },
  logoRow: { display:"flex", justifyContent:"space-between", alignItems:"center", gap:24, flexWrap:"wrap" },
  logoCell: {
    fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:18,
    color:"rgba(253,253,253,0.4)", textTransform:"lowercase", letterSpacing:"0.02em",
  },
};
