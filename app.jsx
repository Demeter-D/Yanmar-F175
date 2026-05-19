// app.jsx — shell, nav, scroll-spy, and tweaks
const { useState, useEffect, useRef } = React;

const NAV = [
  { id: "overview",     num: "01", label: "Overview" },
  { id: "schedule",     num: "02", label: "Service schedule" },
  { id: "filters",      num: "03", label: "Filter changes" },
  { id: "fluids",       num: "04", label: "Lubrication & cooling" },
  { id: "adjustments",  num: "05", label: "Adjustments" },
  { id: "inspections",  num: "06", label: "Inspections" },
  { id: "parts",        num: "07", label: "UK parts list" },
  { id: "torque",       num: "08", label: "Torque & troubleshooting" },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d4541c",
  "paperTone": "warm",
  "density": "comfortable"
}/*EDITMODE-END*/;

function App() {
  const [active, setActive] = useState("overview");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tweaks, setTweak] = window.useTweaks
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  // Apply tweaks to root
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", tweaks.accent);
    const tones = {
      warm:    { paper: "#f4efe6", paper2: "#ebe4d6", ink: "#1a1714", rule: "#d4ccbb" },
      cool:    { paper: "#eef1f4", paper2: "#dde3ea", ink: "#11161c", rule: "#c5cdd6" },
      neutral: { paper: "#f1f1ef", paper2: "#e4e4e1", ink: "#1a1a18", rule: "#cdcdc9" },
    };
    const tone = tones[tweaks.paperTone] || tones.warm;
    Object.entries(tone).forEach(([k, v]) => {
      document.documentElement.style.setProperty("--" + (k === "paper2" ? "paper-2" : k), v);
    });
  }, [tweaks.accent, tweaks.paperTone]);

  useEffect(() => {
    document.body.style.fontSize = tweaks.density === "compact" ? "14px" : tweaks.density === "spacious" ? "17px" : "15px";
  }, [tweaks.density]);

  // Scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // pick the entry closest to the top that is intersecting
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.dataset.section);
    }, { rootMargin: "-10% 0px -70% 0px", threshold: 0 });

    document.querySelectorAll("section[data-section]").forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", drawerOpen);
  }, [drawerOpen]);

  // Close drawer on escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (id) => {
    setDrawerOpen(false);
    // Wait one frame so the drawer can begin closing before scroll
    requestAnimationFrame(() => {
      const el = document.querySelector(`section[data-section="${id}"]`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  };

  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;
  const TweakColor = window.TweakColor;

  const activeNav = NAV.find(n => n.id === active) || NAV[0];

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-brand">
          <div className="topbar-glyph">Y</div>
          <div>
            <div className="topbar-title">F175 Service</div>
            <div className="topbar-model">{activeNav.label}</div>
          </div>
        </div>
        <button className="menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16"/>
          </svg>
        </button>
      </header>

      <div className={"scrim" + (drawerOpen ? " show" : "")} onClick={() => setDrawerOpen(false)} />

      <aside className={"rail" + (drawerOpen ? " open" : "")}>
        <button className="rail-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>
        <div className="brand">
          <div className="brand-mark">
            <div className="brand-glyph">Y</div>
            <div>
              <div className="brand-title">Service Manual</div>
              <div className="brand-model">F175</div>
            </div>
          </div>
          <div className="brand-sub">3T75HA · 17 hp · 4WD</div>
        </div>

        <nav className="nav">
          <div className="nav-group">Contents</div>
          {NAV.map(n => (
            <button
              key={n.id}
              className={"nav-item" + (active === n.id ? " active" : "")}
              onClick={() => goTo(n.id)}
            >
              <span>{n.label}</span>
              <span className="num">{n.num}</span>
            </button>
          ))}
        </nav>

        <div className="rail-foot">
          Edition 2026 · UK<br/>
          Compiled for grey-import F175s.<br/>
          Verify part numbers against the engine plate before ordering.
        </div>
      </aside>

      <main>
        <div className="doc">
          <SectionOverview />
          <div style={{height: 80}}/>
          <SectionSchedule />
          <div style={{height: 80}}/>
          <SectionFilters />
          <div style={{height: 80}}/>
          <SectionFluids />
          <div style={{height: 80}}/>
          <SectionAdjustments />
          <div style={{height: 80}}/>
          <SectionInspections />
          <div style={{height: 80}}/>
          <SectionParts />
          <div style={{height: 80}}/>
          <SectionTorque />
        </div>
      </main>

      {TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection label="Accent">
            <TweakColor
              label="Colour"
              value={tweaks.accent}
              onChange={(v) => setTweak("accent", v)}
              options={["#d4541c", "#2a6fdb", "#1f8a5b", "#8b3a3a"]}
            />
          </TweakSection>
          <TweakSection label="Paper">
            <TweakRadio
              label="Tone"
              value={tweaks.paperTone}
              onChange={(v) => setTweak("paperTone", v)}
              options={[
                { value: "warm", label: "Warm" },
                { value: "neutral", label: "Neutral" },
                { value: "cool", label: "Cool" },
              ]}
            />
          </TweakSection>
          <TweakSection label="Density">
            <TweakRadio
              label="Type"
              value={tweaks.density}
              onChange={(v) => setTweak("density", v)}
              options={[
                { value: "compact", label: "Compact" },
                { value: "comfortable", label: "Normal" },
                { value: "spacious", label: "Roomy" },
              ]}
            />
          </TweakSection>
        </TweaksPanel>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
