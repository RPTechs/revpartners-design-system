/* @ds-bundle: {"format":4,"namespace":"RevPartnersDesignSystem_94eedd","components":[],"sourceHashes":{"ui_kits/website/footer.jsx":"f415a4a40060","ui_kits/website/footer.standalone.jsx":"b442bb1660f7","ui_kits/website/header.jsx":"97f5a9b56bc7","ui_kits/website/header.standalone.jsx":"6c215872f651","ui_kits/website/hero.jsx":"609d9d5e1a0b","ui_kits/website/sections.jsx":"52d393b8e421"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RevPartnersDesignSystem_94eedd = window.RevPartnersDesignSystem_94eedd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/footer.jsx
try { (() => {
// RevPartners Website — Footer Component
// Based on Figma: /Components/components/FooterMenu

Object.assign(window, {
  RPFooter
});
function RPFooter() {
  const cols = [{
    title: "Services",
    links: ["RevOps as a Service", "Allbound Marketing", "HubSpot Onboarding", "HubSpot Integrations", "HubSpot Migrations"]
  }, {
    title: "Resources",
    links: ["Blog & Podcasts", "Success Stories", "BLUF", "RPX Courses", "Pricing"]
  }, {
    title: "Company",
    links: ["About Us", "Careers", "Privacy Policy", "Terms of Service", "Brand Kit"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.top
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/RevPartners-Logo-2026-White.svg",
    alt: "RevPartners",
    style: footerStyles.logo,
    onError: e => {
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "block";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...footerStyles.logoFallback,
      display: "none"
    }
  }, "RevPartners"), /*#__PURE__*/React.createElement("p", {
    style: footerStyles.tagline
  }, "RevOps + GTM Engineering", /*#__PURE__*/React.createElement("br", null), "on HubSpot and Clay."), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.social
  }, ["linkedin", "youtube", "instagram"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: footerStyles.socialLink
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18,
      color: "rgba(253,253,253,0.6)"
    }
  }, s === "linkedin" ? "person" : s === "youtube" ? "play_circle" : "photo_camera"))))), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: footerStyles.footLink
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.bottom
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.copy
  }, "\xA9 2026 RevPartners. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.legal
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footerStyles.legalLink
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footerStyles.legalLink
  }, "Terms of Service"))));
}
const footerStyles = {
  footer: {
    width: "100%",
    background: "#24273A",
    padding: "64px 120px 32px",
    boxSizing: "border-box",
    fontFamily: "'Inter',sans-serif"
  },
  top: {
    display: "flex",
    gap: 60,
    alignItems: "flex-start"
  },
  brand: {
    flex: "0 0 260px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  logo: {
    height: 28,
    width: "auto"
  },
  logoFallback: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#17B451"
  },
  tagline: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "rgba(253,253,253,0.55)",
    margin: 0
  },
  social: {
    display: "flex",
    gap: 12,
    marginTop: 4
  },
  socialLink: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px solid rgba(253,253,253,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none"
  },
  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  colTitle: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(253,253,253,0.45)",
    marginBottom: 4
  },
  footLink: {
    fontSize: 14,
    color: "rgba(253,253,253,0.65)",
    textDecoration: "none",
    lineHeight: 1.4
  },
  divider: {
    height: 1,
    background: "rgba(253,253,253,0.1)",
    margin: "40px 0 24px"
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  copy: {
    fontSize: 13,
    color: "rgba(253,253,253,0.4)"
  },
  legal: {
    display: "flex",
    gap: 24
  },
  legalLink: {
    fontSize: 13,
    color: "rgba(253,253,253,0.4)",
    textDecoration: "none"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/footer.standalone.jsx
try { (() => {
// RevPartners Website — Footer Component
// Based on Figma: /Components/components/FooterMenu

Object.assign(window, {
  RPFooter
});
function RPFooter() {
  const cols = [{
    title: "Services",
    links: ["RevOps as a Service", "Allbound Marketing", "HubSpot Onboarding", "HubSpot Integrations", "HubSpot Migrations"]
  }, {
    title: "Resources",
    links: ["Blog & Podcasts", "Success Stories", "BLUF", "RPX Courses", "Pricing"]
  }, {
    title: "Company",
    links: ["About Us", "Careers", "Privacy Policy", "Terms of Service", "Brand Kit"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.top
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoWhite,
    alt: "RevPartners",
    style: footerStyles.logo,
    onError: e => {
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "block";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...footerStyles.logoFallback,
      display: "none"
    }
  }, "RevPartners"), /*#__PURE__*/React.createElement("p", {
    style: footerStyles.tagline
  }, "RevOps + GTM Engineering", /*#__PURE__*/React.createElement("br", null), "on HubSpot and Clay."), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.social
  }, ["linkedin", "youtube", "instagram"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: footerStyles.socialLink
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18,
      color: "rgba(253,253,253,0.6)"
    }
  }, s === "linkedin" ? "person" : s === "youtube" ? "play_circle" : "photo_camera"))))), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: footerStyles.col
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: footerStyles.footLink
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.divider
  }), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.bottom
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.copy
  }, "\xA9 2026 RevPartners. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.legal
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footerStyles.legalLink
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footerStyles.legalLink
  }, "Terms of Service"))));
}
const footerStyles = {
  footer: {
    width: "100%",
    background: "#24273A",
    padding: "64px 120px 32px",
    boxSizing: "border-box",
    fontFamily: "'Inter',sans-serif"
  },
  top: {
    display: "flex",
    gap: 60,
    alignItems: "flex-start"
  },
  brand: {
    flex: "0 0 260px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  logo: {
    height: 28,
    width: "auto"
  },
  logoFallback: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 20,
    color: "#17B451"
  },
  tagline: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "rgba(253,253,253,0.55)",
    margin: 0
  },
  social: {
    display: "flex",
    gap: 12,
    marginTop: 4
  },
  socialLink: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px solid rgba(253,253,253,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none"
  },
  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  colTitle: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(253,253,253,0.45)",
    marginBottom: 4
  },
  footLink: {
    fontSize: 14,
    color: "rgba(253,253,253,0.65)",
    textDecoration: "none",
    lineHeight: 1.4
  },
  divider: {
    height: 1,
    background: "rgba(253,253,253,0.1)",
    margin: "40px 0 24px"
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  copy: {
    fontSize: 13,
    color: "rgba(253,253,253,0.4)"
  },
  legal: {
    display: "flex",
    gap: 24
  },
  legalLink: {
    fontSize: 13,
    color: "rgba(253,253,253,0.4)",
    textDecoration: "none"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/footer.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/header.jsx
try { (() => {
// RevPartners Website — Header / Nav Component
// Based on Figma: /Components/components/HeaderMenu/HeaderMenu.jsx
// 1440px wide, 95px tall, Off White bg, green logo, pill CTA

Object.assign(window, {
  RPHeader
});
function RPHeader({
  activePage = "services"
}) {
  const links = [{
    id: "revops",
    label: "RevOps"
  }, {
    id: "hubspot",
    label: "HubSpot"
  }, {
    id: "clay",
    label: "Clay"
  }, {
    id: "solutions",
    label: "Solutions"
  }, {
    id: "resources",
    label: "Resources"
  }, {
    id: "rpx",
    label: "RPX"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.nav
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.logoWrap
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/RevPartners-Logo-2026-Green.svg",
    alt: "RevPartners",
    style: headerStyles.logo,
    onError: e => {
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "block";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...headerStyles.logoFallback,
      display: "none"
    }
  }, "RevPartners")), /*#__PURE__*/React.createElement("div", {
    style: headerStyles.right
  }, /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.links
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    style: {
      ...headerStyles.link,
      ...(activePage === l.id ? headerStyles.linkActive : {})
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.cta,
    onMouseEnter: e => Object.assign(e.currentTarget.style, {
      background: "rgba(23,180,81,0.2)",
      color: "#17B451"
    }),
    onMouseLeave: e => Object.assign(e.currentTarget.style, {
      background: "#17B451",
      color: "#FDFDFD"
    })
  }, "Contact Us")));
}
const headerStyles = {
  nav: {
    width: "100%",
    height: 95,
    background: "#FDFDFD",
    borderBottom: "1px solid rgba(36,39,58,0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 120px",
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif"
  },
  logoWrap: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: 30,
    width: "auto"
  },
  logoFallback: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 22,
    color: "#17B451"
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 28
  },
  links: {
    display: "flex",
    gap: 24,
    alignItems: "center"
  },
  link: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 16,
    fontWeight: 600,
    color: "#434761",
    textDecoration: "none",
    cursor: "pointer",
    padding: "4px 0",
    borderBottom: "2px solid transparent",
    transition: "color 0.15s"
  },
  linkActive: {
    color: "#17B451",
    borderBottom: "2px solid #17B451"
  },
  cta: {
    borderRadius: 120,
    background: "#17B451",
    border: "2px solid #17B451",
    color: "#FDFDFD",
    fontFamily: "'Inter',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    padding: "11px 28px",
    cursor: "pointer",
    transition: "all 0.15s"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/header.standalone.jsx
try { (() => {
// RevPartners Website — Header / Nav Component
// Based on Figma: /Components/components/HeaderMenu/HeaderMenu.jsx
// 1440px wide, 95px tall, Off White bg, green logo, pill CTA

Object.assign(window, {
  RPHeader
});
function RPHeader({
  activePage = "services"
}) {
  const links = [{
    id: "revops",
    label: "RevOps"
  }, {
    id: "hubspot",
    label: "HubSpot"
  }, {
    id: "clay",
    label: "Clay"
  }, {
    id: "solutions",
    label: "Solutions"
  }, {
    id: "resources",
    label: "Resources"
  }, {
    id: "rpx",
    label: "RPX"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.nav
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.logoWrap
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoGreen,
    alt: "RevPartners",
    style: headerStyles.logo,
    onError: e => {
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "block";
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...headerStyles.logoFallback,
      display: "none"
    }
  }, "RevPartners")), /*#__PURE__*/React.createElement("div", {
    style: headerStyles.right
  }, /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.links
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    style: {
      ...headerStyles.link,
      ...(activePage === l.id ? headerStyles.linkActive : {})
    }
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.cta,
    onMouseEnter: e => Object.assign(e.currentTarget.style, {
      background: "rgba(23,180,81,0.2)",
      color: "#17B451"
    }),
    onMouseLeave: e => Object.assign(e.currentTarget.style, {
      background: "#17B451",
      color: "#FDFDFD"
    })
  }, "Contact Us")));
}
const headerStyles = {
  nav: {
    width: "100%",
    height: 95,
    background: "#FDFDFD",
    borderBottom: "1px solid rgba(36,39,58,0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 120px",
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif"
  },
  logoWrap: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: 30,
    width: "auto"
  },
  logoFallback: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 22,
    color: "#17B451"
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 28
  },
  links: {
    display: "flex",
    gap: 24,
    alignItems: "center"
  },
  link: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 16,
    fontWeight: 600,
    color: "#434761",
    textDecoration: "none",
    cursor: "pointer",
    padding: "4px 0",
    borderBottom: "2px solid transparent",
    transition: "color 0.15s"
  },
  linkActive: {
    color: "#17B451",
    borderBottom: "2px solid #17B451"
  },
  cta: {
    borderRadius: 120,
    background: "#17B451",
    border: "2px solid #17B451",
    color: "#FDFDFD",
    fontFamily: "'Inter',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    padding: "11px 28px",
    cursor: "pointer",
    transition: "all 0.15s"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/header.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/hero.jsx
try { (() => {
// RevPartners Website — Hero
// Recreation of revpartners.io hero: dark navy, "Grow with Confidence"
// eyebrow, big Montserrat SemiBold headline, RPM callout, green CTA + logo strip.

Object.assign(window, {
  RPHero
});
function RPHero() {
  const logos = ["eventbrite", "zoom", "spectrum voip", "gardaworld", "midtown", "snappt"];
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.section
  }, /*#__PURE__*/React.createElement("svg", {
    style: heroStyles.motif,
    viewBox: "0 0 200 160",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 20 H150 V150",
    stroke: "#17B451",
    strokeWidth: "2",
    strokeDasharray: "6 8",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.content
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.eyebrow
  }, "Grow with Confidence"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.headline
  }, "RevOps + GTM Engineering for Businesses on ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#17B451"
    }
  }, "HubSpot"), " and ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#17B451"
    }
  }, "Clay")), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "When growth stalls, clarity matters. We created the Revenue Performance Model\u2122 to help GTM teams measure and accelerate revenue across the customer journey."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.actions
  }, /*#__PURE__*/React.createElement("button", {
    style: heroStyles.cta,
    onMouseEnter: e => Object.assign(e.currentTarget.style, {
      background: "rgba(23,180,81,0.2)",
      color: "#17B451"
    }),
    onMouseLeave: e => Object.assign(e.currentTarget.style, {
      background: "#17B451",
      color: "#FDFDFD"
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 20
    }
  }, "arrow_forward"), "Get a Free Revenue Health Check"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: heroStyles.link
  }, "Show me the RPM\u2122 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter',sans-serif"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.trust
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.trustLabel
  }, "Trusted by the leading B2B brands on HubSpot"), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.logoRow
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: heroStyles.logoCell
  }, l)))));
}
const heroStyles = {
  section: {
    position: "relative",
    width: "100%",
    background: "#24273A",
    padding: "96px 120px 48px",
    boxSizing: "border-box",
    overflow: "hidden"
  },
  motif: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 280,
    height: 220,
    pointerEvents: "none"
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: 860,
    display: "flex",
    flexDirection: "column",
    gap: 24
  },
  eyebrow: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.4em",
    textTransform: "uppercase",
    color: "#17B451"
  },
  headline: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 52,
    lineHeight: 1.12,
    color: "#FDFDFD",
    margin: 0,
    letterSpacing: "-0.01em"
  },
  sub: {
    fontFamily: "'Inter',sans-serif",
    fontWeight: 400,
    fontSize: 19,
    lineHeight: 1.65,
    color: "rgba(253,253,253,0.72)",
    margin: 0,
    maxWidth: 640
  },
  actions: {
    display: "flex",
    gap: 28,
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 8
  },
  cta: {
    borderRadius: 120,
    background: "#17B451",
    border: "2px solid #17B451",
    color: "#FDFDFD",
    fontFamily: "'Inter',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    padding: "13px 30px",
    cursor: "pointer",
    transition: "all 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  },
  link: {
    fontFamily: "'Inter',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#FDFDFD",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8
  },
  trust: {
    position: "relative",
    zIndex: 2,
    marginTop: 64,
    borderTop: "1px solid rgba(253,253,253,0.12)",
    paddingTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  trustLabel: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "rgba(253,253,253,0.5)",
    textAlign: "center"
  },
  logoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    flexWrap: "wrap"
  },
  logoCell: {
    fontFamily: "'Inter',sans-serif",
    fontWeight: 600,
    fontSize: 18,
    color: "rgba(253,253,253,0.4)",
    textTransform: "lowercase",
    letterSpacing: "0.02em"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// RevPartners Website — Reusable Section Components
// Card recipe: 2px border (accent OR neutral stroke) + tinted/bg-2 fill,
// icon sits directly on surface (no background), Inter fancy link with arrow.
// Steps: filled circles (accent cycle), white numerals, dashed connectors.

Object.assign(window, {
  TextImageSection,
  ServiceCard,
  StatCard,
  CTABanner,
  ServiceGrid,
  DiagramSection
});
const ACCENTS = ["#17B451", "#329DFF", "#F7761E", "#FB3131", "#8C32FF"];
const tint = {
  "#17B451": "rgba(23,180,81,0.08)",
  "#329DFF": "rgba(50,157,255,0.08)",
  "#F7761E": "rgba(239,129,27,0.08)",
  "#FB3131": "rgba(251,49,49,0.08)",
  "#8C32FF": "rgba(140,50,255,0.08)"
};

/* ── Fancy link — Inter, arrow included ── */
function FancyLink({
  children,
  color = "#17B451"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Inter',sans-serif",
      fontWeight: 600,
      fontSize: 15,
      color,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    },
    onMouseEnter: e => {
      const a = e.currentTarget.querySelector('span');
      if (a) a.style.transform = "translateX(3px)";
    },
    onMouseLeave: e => {
      const a = e.currentTarget.querySelector('span');
      if (a) a.style.transform = "translateX(0)";
    }
  }, children, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter',sans-serif",
      transition: "transform 0.15s ease"
    }
  }, "\u2192"));
}

/* ── Text + Image Section ── */
function TextImageSection({
  eyebrow,
  title,
  body,
  cta,
  ctaSecondary,
  bg = "#FDFDFD",
  flip = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...sectionStyles.section,
      background: bg,
      flexDirection: flip ? "row-reverse" : "row"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.textCol
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.eyebrow
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: sectionStyles.h2
  }, title), /*#__PURE__*/React.createElement("p", {
    style: sectionStyles.body
  }, body), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.actions
  }, cta && /*#__PURE__*/React.createElement("button", {
    style: sectionStyles.btnPrimary,
    onMouseEnter: e => Object.assign(e.currentTarget.style, {
      background: "rgba(23,180,81,0.2)",
      color: "#17B451"
    }),
    onMouseLeave: e => Object.assign(e.currentTarget.style, {
      background: "#17B451",
      color: "#FDFDFD"
    })
  }, cta), ctaSecondary && /*#__PURE__*/React.createElement(FancyLink, null, ctaSecondary))), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.imageCol
  }, /*#__PURE__*/React.createElement(ImagePlaceholder, null)));
}

/* ── Image placeholder — the site uses proprietary hand-drawn schematic
      illustrations we don't recreate; this marks where one belongs. ── */
function ImagePlaceholder() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 440,
      aspectRatio: "4 / 3",
      borderRadius: 12,
      border: "2px dashed rgba(36,39,58,0.2)",
      background: "#F3F3F4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 40,
      color: "#A1A2A7"
    }
  }, "draw"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 13,
      color: "#A1A2A7",
      fontWeight: 600
    }
  }, "Brand illustration"));
}

/* ── Service Card — 2px accent border, tinted fill, bare icon ── */
function ServiceCard({
  color = "#17B451",
  icon,
  title,
  body,
  link,
  neutral = false
}) {
  const borderColor = neutral ? "rgba(36,39,58,0.2)" : color;
  const bg = neutral ? "#F3F3F4" : tint[color] || tint["#17B451"];
  const iconColor = neutral ? "#24273A" : color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionStyles.serviceCard,
      borderColor,
      background: bg
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 32,
      color: iconColor,
      marginBottom: 4
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: sectionStyles.cardTitle
  }, title), /*#__PURE__*/React.createElement("p", {
    style: sectionStyles.cardBody
  }, body), link && /*#__PURE__*/React.createElement(FancyLink, {
    color: neutral ? "#17B451" : color
  }, link));
}

/* ── Stat Card — single accent, light tint fill (no dark backgrounds) ── */
function StatCard({
  number,
  label,
  accent = "#17B451"
}) {
  const t = tint[accent] || tint["#17B451"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionStyles.statCard,
      borderColor: accent,
      background: t
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sectionStyles.statNum,
      color: accent
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.statLabel
  }, label));
}

/* ── CTA Banner ── */
function CTABanner({
  title,
  body,
  cta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: sectionStyles.ctaBanner
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.ctaInner
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...sectionStyles.h2,
      color: "#FDFDFD",
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...sectionStyles.body,
      color: "rgba(253,253,253,0.75)",
      marginBottom: 24
    }
  }, body), /*#__PURE__*/React.createElement("button", {
    style: {
      ...sectionStyles.btnPrimary,
      background: "#FDFDFD",
      color: "#17B451",
      borderColor: "#FDFDFD"
    }
  }, cta)));
}

/* ── Service Grid ── */
function ServiceGrid({
  services
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: sectionStyles.serviceSection
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.sectionInner
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.serviceGrid
  }, services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: i
  }, s))))));
}

/* ── Diagram / Steps Section — filled circles, accent cycle, dashed lines ── */
function DiagramSection({
  title,
  body,
  steps
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...sectionStyles.section,
      flexDirection: "column",
      alignItems: "center",
      background: "#F3F3F4",
      padding: "80px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 600,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: sectionStyles.h2
  }, title), /*#__PURE__*/React.createElement("p", {
    style: sectionStyles.body
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: 900
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 130px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: ACCENTS[i % ACCENTS.length],
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: 700,
      fontSize: 20,
      color: "#FFFFFF"
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Montserrat',sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: "#24273A",
      textAlign: "center"
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: 13,
      color: "#434761",
      textAlign: "center",
      maxWidth: 120,
      lineHeight: 1.4
    }
  }, s.desc)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderTop: "2px dashed rgba(36,39,58,0.25)",
      marginTop: 28
    }
  })))));
}
const sectionStyles = {
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 80,
    padding: "80px 120px",
    boxSizing: "border-box",
    alignItems: "center"
  },
  textCol: {
    flex: "0 0 480px",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  imageCol: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  eyebrow: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.4em",
    textTransform: "uppercase",
    color: "#17B451"
  },
  h2: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 1.2,
    color: "#24273A",
    margin: 0
  },
  body: {
    fontFamily: "'Inter',sans-serif",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#434761",
    margin: 0
  },
  actions: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    flexWrap: "wrap"
  },
  btnPrimary: {
    borderRadius: 120,
    background: "#17B451",
    border: "2px solid #17B451",
    color: "#FDFDFD",
    fontFamily: "'Inter',sans-serif",
    fontWeight: 700,
    fontSize: 16,
    padding: "13px 32px",
    cursor: "pointer",
    transition: "all 0.15s"
  },
  serviceSection: {
    width: "100%",
    padding: "80px 120px",
    boxSizing: "border-box",
    background: "#FDFDFD"
  },
  sectionInner: {
    maxWidth: 1200,
    margin: "0 auto"
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 24
  },
  serviceCard: {
    borderRadius: 12,
    border: "2px solid",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "flex-start"
  },
  cardTitle: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 19,
    lineHeight: 1.2,
    color: "#24273A",
    margin: 0
  },
  cardBody: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 15,
    lineHeight: 1.6,
    color: "#434761",
    margin: 0,
    flex: 1
  },
  statCard: {
    border: "2px solid",
    borderRadius: 12,
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  statNum: {
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    fontSize: 42,
    lineHeight: 1
  },
  statLabel: {
    fontFamily: "'Inter',sans-serif",
    fontSize: 14,
    color: "#434761",
    lineHeight: 1.5
  },
  ctaBanner: {
    width: "100%",
    background: "#24273A",
    padding: "72px 120px",
    boxSizing: "border-box"
  },
  ctaInner: {
    maxWidth: 640
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

})();
