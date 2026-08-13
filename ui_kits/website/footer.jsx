// RevPartners Website — Footer Component
// Based on Figma: /Components/components/FooterMenu

Object.assign(window, { RPFooter });

function RPFooter() {
  const cols = [
    { title: "Services", links: ["RevOps as a Service", "Allbound Marketing", "HubSpot Onboarding", "HubSpot Integrations", "HubSpot Migrations"] },
    { title: "Resources", links: ["Blog & Podcasts", "Success Stories", "BLUF", "RPX Courses", "Pricing"] },
    { title: "Company",  links: ["About Us", "Careers", "Privacy Policy", "Terms of Service", "Brand Kit"] },
  ];
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.top}>
        {/* Logo + tagline */}
        <div style={footerStyles.brand}>
          <img src="../../assets/RevPartners-Logo-2026-White.svg"
            alt="RevPartners" style={footerStyles.logo}
            onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}} />
          <span style={{...footerStyles.logoFallback,display:"none"}}>RevPartners</span>
          <p style={footerStyles.tagline}>RevOps + GTM Engineering<br/>on HubSpot and Clay.</p>
          <div style={footerStyles.social}>
            {["linkedin","youtube","instagram"].map(s=>(
              <a key={s} href="#" style={footerStyles.socialLink}>
                <span className="material-symbols-outlined"
                  style={{fontSize:18,color:"rgba(253,253,253,0.6)"}}>
                  {s==="linkedin"?"person":s==="youtube"?"play_circle":"photo_camera"}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Link columns */}
        {cols.map(col=>(
          <div key={col.title} style={footerStyles.col}>
            <div style={footerStyles.colTitle}>{col.title}</div>
            {col.links.map(l=>(
              <a key={l} href="#" style={footerStyles.footLink}>{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={footerStyles.divider} />
      <div style={footerStyles.bottom}>
        <span style={footerStyles.copy}>© 2026 RevPartners. All rights reserved.</span>
        <div style={footerStyles.legal}>
          <a href="#" style={footerStyles.legalLink}>Privacy Policy</a>
          <a href="#" style={footerStyles.legalLink}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

const footerStyles = {
  footer: {
    width:"100%",background:"#24273A",
    padding:"64px 120px 32px",boxSizing:"border-box",
    fontFamily:"'Inter',sans-serif",
  },
  top: {display:"flex",gap:60,alignItems:"flex-start"},
  brand: {flex:"0 0 260px",display:"flex",flexDirection:"column",gap:16},
  logo: {height:28,width:"auto"},
  logoFallback: {fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:20,color:"#17B451"},
  tagline: {fontSize:14,lineHeight:1.6,color:"rgba(253,253,253,0.55)",margin:0},
  social: {display:"flex",gap:12,marginTop:4},
  socialLink: {
    width:32,height:32,borderRadius:"50%",
    border:"1px solid rgba(253,253,253,0.15)",
    display:"flex",alignItems:"center",justifyContent:"center",
    textDecoration:"none",
  },
  col: {flex:1,display:"flex",flexDirection:"column",gap:10},
  colTitle: {
    fontFamily:"'Montserrat',sans-serif",fontWeight:700,fontSize:13,
    letterSpacing:"0.12em",textTransform:"uppercase",
    color:"rgba(253,253,253,0.45)",marginBottom:4,
  },  footLink: {fontSize:14,color:"rgba(253,253,253,0.65)",textDecoration:"none",lineHeight:1.4},
  divider: {height:1,background:"rgba(253,253,253,0.1)",margin:"40px 0 24px"},
  bottom: {display:"flex",justifyContent:"space-between",alignItems:"center"},
  copy: {fontSize:13,color:"rgba(253,253,253,0.4)"},
  legal: {display:"flex",gap:24},
  legalLink: {fontSize:13,color:"rgba(253,253,253,0.4)",textDecoration:"none"},
};
