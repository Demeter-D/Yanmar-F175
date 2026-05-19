// content.jsx — data + section components for the F175 service guide
// All Yanmar part numbers below are commonly cited for the 3T75H(A) engine fitted to the F175.
// Numbers can vary by build year and serial. ALWAYS cross-check against the plate before ordering.

const SPECS = {
  model: "F175 / F175D",
  market: "Japanese domestic (grey-import to UK)",
  years: "1984 – 1995 (approx.)",
  engine: "Yanmar 3T75HA — 3-cyl indirect-injection diesel",
  displacement: "899 cc",
  power: "17.0 hp @ 2600 rpm",
  drive: "4WD (selectable, mechanical)",
  transmission: "8 forward × 2 reverse, fully synchromesh",
  pto: "540 rpm, independent live, 1⅜\" 6-spline",
  weight: "≈ 640 kg",
  fuel: "Diesel (red / off-road permitted in UK for ag use)",
};

const CAPACITIES = [
  { k: "Engine oil", v: "3.4 L", t: "with filter change; 3.2 L without" },
  { k: "Transmission / hydraulic", v: "≈ 15 L", t: "shared sump" },
  { k: "Front axle (4WD)", v: "≈ 2.5 L", t: "" },
  { k: "Coolant", v: "≈ 3.0 L", t: "radiator + block" },
  { k: "Fuel tank", v: "≈ 13 L", t: "" },
];

const FLUIDS = [
  { k: "Engine oil", spec: "SAE 15W-40, API CF / CF-4 or better", note: "Use a quality fleet/diesel oil. CK-4 modern oils are fine." },
  { k: "Transmission / hydraulic", spec: "UTTO — universal tractor transmission oil", note: "Shell Donax TD, Mobilfluid 424, Comma SUTO, or any UTTO meeting John Deere J20C." },
  { k: "Front axle", spec: "SAE 80W-90 GL-4 gear oil", note: "Some use UTTO here too; check via the dipstick / level plug." },
  { k: "Coolant", spec: "OAT or IAT antifreeze, 50:50 with clean water", note: "Avoid mixing chemistries — flush first." },
  { k: "Grease", spec: "NLGI #2 lithium EP", note: "" },
  { k: "Fuel", spec: "EN 590 diesel (red diesel permitted off-road)", note: "Avoid >7% biodiesel without compatible seals." },
];

// ---- Service schedule ---------------------------------------------------
const SCHEDULE = [
  { hours: "Daily / pre-use", major: false, tasks: [
    { kind: "check", t: "Engine oil level" },
    { kind: "check", t: "Coolant level" },
    { kind: "check", t: "Air filter — dust valve" },
    { kind: "check", t: "Tyre pressures" },
    { kind: "check", t: "Lights, horn, controls" },
    { kind: "check", t: "Walk-around for leaks" },
  ]},
  { hours: "Every 50 h", major: false, tasks: [
    { kind: "check", t: "Grease all nipples" },
    { kind: "check", t: "Battery electrolyte" },
    { kind: "check", t: "Hydraulic / trans level" },
    { kind: "check", t: "Wheel nut torque" },
  ]},
  { hours: "First 50 h (run-in)", major: true, tasks: [
    { kind: "replace", t: "Engine oil + filter" },
    { kind: "replace", t: "Transmission oil" },
    { kind: "replace", t: "Front axle oil" },
    { kind: "check", t: "Valve clearances" },
  ]},
  { hours: "Every 100 h", major: false, tasks: [
    { kind: "replace", t: "Engine oil" },
    { kind: "check", t: "Fan belt tension" },
    { kind: "check", t: "Clutch & brake free play" },
  ]},
  { hours: "Every 200 h", major: true, tasks: [
    { kind: "replace", t: "Engine oil filter" },
    { kind: "replace", t: "Fuel filter element" },
    { kind: "check", t: "Air filter — clean / inspect" },
  ]},
  { hours: "Every 400 h", major: true, tasks: [
    { kind: "replace", t: "Air filter element" },
    { kind: "check", t: "Valve clearances (cold)" },
    { kind: "check", t: "Injector spray pattern" },
  ]},
  { hours: "Every 800 h", major: true, tasks: [
    { kind: "replace", t: "Transmission / hydraulic oil" },
    { kind: "replace", t: "Hydraulic suction strainer" },
    { kind: "replace", t: "Front axle oil" },
  ]},
  { hours: "Every 1000 h / 2 yrs", major: true, tasks: [
    { kind: "replace", t: "Coolant — drain & refill" },
    { kind: "replace", t: "Radiator hoses (inspect)" },
    { kind: "replace", t: "Fuel lines (inspect)" },
  ]},
];

// ---- UK Parts list ------------------------------------------------------
// genuine Yanmar numbers + commonly available UK aftermarket cross-refs
const PARTS = [
  { cat: "Filters", name: "Engine oil filter", yanmar: "124085-35113", alts: ["Donaldson P502067", "Baldwin B7165", "Hifi SO3357", "Fram PH4967"], notes: "Spin-on, M20×1.5", price: "≈ £7–14", suppliers: "Malpas, AgriParts UK, Sparex" },
  { cat: "Filters", name: "Fuel filter element", yanmar: "104500-55710", alts: ["Hifi FF5132", "Donaldson P550127", "Baldwin BF7587"], notes: "Cartridge style, inside bowl on RH side", price: "≈ £6–12", suppliers: "Malpas, Sparex, eBay UK" },
  { cat: "Filters", name: "Air filter element (primary)", yanmar: "129150-12520", alts: ["Donaldson P822686", "Hifi SA12108", "Mann C 1112"], notes: "Dry paper canister in housing on bonnet side", price: "≈ £14–22", suppliers: "Malpas, AgriParts UK" },
  { cat: "Filters", name: "Hydraulic suction strainer", yanmar: "172472-73430", alts: ["Hifi SH56612"], notes: "In transmission case — gasket-and-bolt removal, wash & refit", price: "≈ £18–30", suppliers: "Malpas, Sparex" },
  { cat: "Filters", name: "Fuel sediment bowl O-ring", yanmar: "23414-080002", alts: ["Generic 8×2 mm NBR O-ring"], notes: "Renew on every fuel filter service", price: "≈ £1", suppliers: "Any seal kit" },

  { cat: "Lubricants", name: "Engine oil (15W-40, 5 L)", yanmar: "—", alts: ["Comma X-Flow Type MF 15W-40", "Morris Multi-Farm 15W-40", "Mobil Delvac MX 15W-40"], notes: "API CF / CK-4. 5 L covers oil change + top-ups.", price: "≈ £22–32 / 5 L", suppliers: "Halfords, agri-merchants" },
  { cat: "Lubricants", name: "UTTO transmission/hydraulic (20 L)", yanmar: "—", alts: ["Comma SUTO", "Morris Liquimatic Multi GP", "Mobilfluid 424", "Shell Donax TD"], notes: "Meets JD J20C", price: "≈ £55–85 / 20 L", suppliers: "Morris, Comma, Carrs Billington" },
  { cat: "Lubricants", name: "Front axle oil (80W-90 GL-4)", yanmar: "—", alts: ["Comma EP80W-90 GL-4", "Morris K140"], notes: "≈ 2.5 L", price: "≈ £12–18 / 5 L", suppliers: "Most factors" },
  { cat: "Lubricants", name: "Antifreeze (concentrate, 5 L)", yanmar: "—", alts: ["Comma Xstream G48 (blue)", "Morris MAF Plus"], notes: "Mix 50:50 with clean water", price: "≈ £18–26 / 5 L", suppliers: "Halfords" },
  { cat: "Lubricants", name: "Grease (NLGI #2 lithium EP, 400 g)", yanmar: "—", alts: ["Morris K48 EP2", "Comma Lithium EP2"], notes: "Standard cartridge size", price: "≈ £3–6", suppliers: "Toolstation, Screwfix" },

  { cat: "Belts & Hoses", name: "Fan / alternator belt", yanmar: "129350-77350", alts: ["Gates 6240MC", "Optibelt AVX10×800"], notes: "Measure existing — early/late F175 differ", price: "≈ £8–14", suppliers: "Malpas, Sparex" },
  { cat: "Belts & Hoses", name: "Upper radiator hose", yanmar: "129350-44520", alts: ["Generic moulded 28 mm ID"], notes: "Inspect at every coolant change", price: "≈ £12–22", suppliers: "Malpas" },
  { cat: "Belts & Hoses", name: "Lower radiator hose", yanmar: "129350-44530", alts: ["Generic moulded 32 mm ID"], notes: "", price: "≈ £12–22", suppliers: "Malpas" },

  { cat: "Engine", name: "Head gasket set", yanmar: "129350-01334", alts: ["Hifi 129350-01334"], notes: "Order by engine serial — A/B variants exist", price: "≈ £55–95", suppliers: "Malpas, Bates Tractors" },
  { cat: "Engine", name: "Thermostat (76.5 °C)", yanmar: "129155-49800", alts: ["Generic 52 mm"], notes: "", price: "≈ £14–24", suppliers: "Malpas, Sparex" },
  { cat: "Engine", name: "Glow plug (×3)", yanmar: "124486-77800", alts: ["NGK Y-704R", "Bosch 0250202036"], notes: "10.5 V — wired in parallel", price: "≈ £6–10 each", suppliers: "Malpas, eBay UK" },
  { cat: "Engine", name: "Injector nozzle (×3)", yanmar: "714770-53100", alts: ["Bosch DN0SD2110"], notes: "Throttle-pintle DN-type", price: "≈ £18–28 each", suppliers: "Diesel specialist" },

  { cat: "Electrical", name: "Battery (Group 38B19L)", yanmar: "—", alts: ["Numax CXV17", "Lucas LP005L", "Yuasa NP4-12"], notes: "≈ 36–45 Ah, post on RH side. Confirm polarity.", price: "≈ £55–85", suppliers: "Tayna, Halfords" },
  { cat: "Electrical", name: "Starter motor", yanmar: "129573-77010", alts: ["Reman units widely available"], notes: "12 V, 1.0 kW", price: "≈ £85–160 reman", suppliers: "Malpas, AgriParts UK" },
  { cat: "Electrical", name: "Alternator", yanmar: "129423-77200", alts: ["Reman 12 V, 35 A"], notes: "", price: "≈ £95–180 reman", suppliers: "Malpas" },
  { cat: "Electrical", name: "Headlamp bulb (H4)", yanmar: "—", alts: ["Osram H4 12 V 60/55 W"], notes: "Standard automotive", price: "≈ £4–8", suppliers: "Halfords" },

  { cat: "Cab / Trim", name: "Seat cushion (universal)", yanmar: "—", alts: ["Sparex S.71653", "Granit pan seat"], notes: "OEM seat often perished; universal fits well", price: "≈ £45–95", suppliers: "Sparex, Malpas" },
  { cat: "Cab / Trim", name: "Decal set — F175", yanmar: "—", alts: ["JapaneseTractorSpares.co.uk repro set"], notes: "Repro vinyl, body colour-matched", price: "≈ £25–45", suppliers: "JTS, eBay UK" },
];

const PART_CATS = ["All", "Filters", "Lubricants", "Belts & Hoses", "Engine", "Electrical", "Cab / Trim"];

// ---- Filter procedures --------------------------------------------------
const PROC_ENGINE_OIL = {
  id: "engine-oil",
  tag: "F-01",
  name: "Engine oil & filter change",
  interval: "Every 100 h / annually (filter every 200 h)",
  time: "≈ 30 min",
  difficulty: "Easy",
  tools: ["10 mm spanner", "Oil filter strap or 76 mm cup wrench", "Drain pan (5 L+)", "Funnel", "Clean rag"],
  parts: [
    { label: "Oil filter", code: "124085-35113" },
    { label: "Engine oil", code: "15W-40, 3.4 L" },
    { label: "Drain plug washer", code: "Cu 14 mm" },
  ],
  steps: [
    { t: "Run the engine to operating temperature for 5–10 minutes, then stop. Warm oil drains far cleaner — but do not work on hot exhaust components.", tip: "Park on level ground, handbrake on, key out, PTO disengaged." },
    { t: "Open the bonnet and remove the oil filler cap on the rocker cover. Leaving it off speeds draining and prevents vacuum lock." },
    { t: "Locate the sump drain plug — underside of the engine, slightly to the right. Place a 5 L pan beneath it." },
    { t: "Crack the 14 mm drain plug anti-clockwise with a socket. Once loose, finish by hand and let the oil run out. Allow at least 10 minutes for full drainage.", tip: "Inspect the copper washer — replace if flattened or nicked." },
    { t: "Refit the drain plug with its washer. Torque to 30 Nm. Do not over-tighten — the alloy sump strips easily.", tip: "If unsure, snug + ¼ turn is enough." },
    { t: "Locate the spin-on oil filter on the right-hand side of the block. Position the pan beneath it (some oil will spill)." },
    { t: "Remove the filter anti-clockwise. Use a strap or cup wrench if hand-tight isn't enough." },
    { t: "Wipe the filter seat clean. Smear a film of fresh oil onto the new filter's rubber seal.", tip: "Pre-fill the filter with oil if you can stand it upright before fitting — speeds first oil-pressure build-up." },
    { t: "Spin the new filter on by hand until the gasket touches the seat, then tighten ¾ turn further. Do not use a wrench to install." },
    { t: "Refill with fresh 15W-40 through the rocker cover filler. Pour slowly and check the dipstick — the F175 takes 3.4 L with a new filter." },
    { t: "Refit the filler cap. Start the engine and idle for 30 seconds while watching the oil pressure light — it should extinguish within 5 seconds.", tip: "If the light stays on, stop immediately and investigate." },
    { t: "Stop the engine, wait 2 minutes, and re-check the dipstick. Top up to the upper mark if needed. Check around the filter and drain plug for leaks." },
    { t: "Record the hours in your service log and label the filter (with the date) so the next person knows when it was done." },
  ],
};

const PROC_FUEL = {
  id: "fuel-filter",
  tag: "F-02",
  name: "Fuel filter element & bleed",
  interval: "Every 200 h / annually",
  time: "≈ 25 min (including bleed)",
  difficulty: "Easy–medium",
  tools: ["12 mm spanner", "10 mm spanner", "Drain bowl", "Clean diesel for primer", "Pliers (hose clip)"],
  parts: [
    { label: "Fuel filter element", code: "104500-55710" },
    { label: "Bowl O-ring", code: "23414-080002" },
  ],
  steps: [
    { t: "Close the fuel tap on the underside of the tank — quarter-turn lever, vertical = OFF.", tip: "Forgetting this means a tank-full of diesel on the floor." },
    { t: "Place a clean drain bowl beneath the filter assembly on the right-hand side of the engine, below the tank." },
    { t: "Unscrew the retaining ring/centre bolt on the filter bowl by hand or with a 12 mm spanner. Catch the bowl as it comes free — it still holds diesel." },
    { t: "Tip the contents into the drain bowl. Inspect for water (separate layer at the bottom) or black sediment — both indicate tank contamination." },
    { t: "Lift out the old paper element. Clean the inside of the bowl and the upper housing with a lint-free rag and a splash of clean diesel.", tip: "Never use compressed air on the head — it can damage the seat." },
    { t: "Remove the old O-ring from the bowl. Lightly oil the new O-ring with diesel and seat it in its groove." },
    { t: "Drop the new element into the bowl, centre-spring down (orientation per the carton). Offer the bowl up to the head and tighten the retaining bolt evenly — snug, not crushing.", tip: "Cross-threading the alloy head is an expensive mistake. Start it by hand." },
    { t: "Open the tank tap. Diesel will now run by gravity through the new element." },
    { t: "Bleed the filter: slacken the bleed screw on top of the filter head ½ turn. Wait until fuel runs out clear of bubbles, then nip it up.", tip: "Some F175s lack a dedicated bleed screw — in that case, crack the supply union at the injection pump inlet instead." },
    { t: "Bleed the injection pump: slacken the inlet union at the pump until clear fuel weeps out, then tighten. 10 mm spanner." },
    { t: "Bleed the injectors (only if engine won't start after the above): slacken each injector pipe union at the injector by ½ turn, crank for 5 s bursts until fuel sprays, retighten." },
    { t: "Start the engine. It may run rough for 10–20 seconds while the last air clears, then settle. Check the filter and unions for leaks.", tip: "If it won't start in two 10-second cranks, stop and re-bleed. Don't flatten the battery." },
  ],
};

const PROC_AIR = {
  id: "air-filter",
  tag: "F-03",
  name: "Air filter service",
  interval: "Clean every 200 h • Replace every 400 h or annually",
  time: "≈ 10 min",
  difficulty: "Easy",
  tools: ["Flat screwdriver / clip lever", "Clean rag", "Compressed air (≤ 30 psi) — optional"],
  parts: [
    { label: "Primary element", code: "129150-12520" },
  ],
  steps: [
    { t: "Locate the air filter canister — black cylindrical housing on the bonnet-side of the engine bay, with a rubber duct to the inlet manifold." },
    { t: "Empty the rubber dust valve at the bottom of the canister by squeezing it. Any dust that falls out should be dry — wet/muddy dust means an air leak somewhere upstream." },
    { t: "Release the two over-centre clips on the canister cap. Lift the cap clear." },
    { t: "Slide the paper element out by its end-cap. Hold it horizontal so debris doesn't fall into the outlet pipe." },
    { t: "Inspect the element against a strong light — pinholes, tears, oily patches, or collapsed pleats = replace. Compressed-air cleaning is only worth doing once or twice before binning.", tip: "Blow from the INSIDE out, ≤ 30 psi, with the nozzle 150 mm away. Never tap on a hard surface." },
    { t: "Wipe the inside of the canister and the cap clean with a damp rag. Check the outlet duct to the manifold for splits or loose clips — a leak here is a fast route to wrecking a piston." },
    { t: "Refit the element, seal-end first. Confirm it seats squarely in its bore." },
    { t: "Refit the cap, ensuring the dust valve points DOWN. Close both clips firmly." },
    { t: "Start and run the engine briefly. Confirm no whistle / suck at the canister or duct joints." },
  ],
};

const PROC_HYD = {
  id: "hydraulic-filter",
  tag: "F-04",
  name: "Hydraulic / transmission oil & strainer",
  interval: "Every 800 h or 2 years",
  time: "≈ 1.5 h",
  difficulty: "Medium",
  tools: ["17 mm + 19 mm sockets", "Drain pan (20 L)", "Funnel + long flexible hose", "New strainer gasket", "Torque wrench"],
  parts: [
    { label: "Suction strainer", code: "172472-73430" },
    { label: "UTTO oil", code: "≈ 15 L" },
    { label: "Strainer gasket", code: "OEM paper or RTV" },
  ],
  steps: [
    { t: "Park on level ground, transmission warm but not hot. Lower the 3-point linkage to the floor — this drains the lift cylinders back into the sump." },
    { t: "Wipe the area around the dipstick (top of the transmission tunnel, behind the seat) and the fill cap. Remove the cap." },
    { t: "Place a 20 L drain pan beneath the transmission. There are TWO drain plugs: one on the centre-rear of the transmission housing, one on the rear-axle housing. Remove both.", tip: "Note any metallic particles on the magnetic plug — light fuzz is normal; chunks are not." },
    { t: "Allow at least 30 minutes for full drainage. Tilt the tractor slightly forward if you can." },
    { t: "Locate the suction strainer cover on the LH side of the transmission housing (square cover, 4 bolts, 12–13 mm head). Remove the bolts and lift the cover clear with its gasket." },
    { t: "Withdraw the cylindrical mesh strainer. Wash it in clean diesel or paraffin and shake dry — do NOT use compressed air directly on the mesh.", tip: "If the mesh is torn or distorted, fit a new one — £20 is cheaper than a hydraulic pump." },
    { t: "Scrape off the old gasket from both cover and case. Fit the new gasket (or a 3 mm bead of fuel-resistant RTV) and refit the strainer and cover. Torque the bolts evenly to 22 Nm." },
    { t: "Inspect the drain plug washers — replace if questionable. Refit both drain plugs and torque to 50 Nm." },
    { t: "Refill with fresh UTTO through the dipstick port. Capacity is approximately 15 L, but trust the dipstick, not the pour count.", tip: "A long flexible funnel hose is essential here — the fill port is awkward." },
    { t: "Start the engine at idle, raise and lower the 3-point linkage 4–5 times, and cycle any auxiliary services. This circulates oil through the cylinders and clears air." },
    { t: "Stop the engine, wait 2 minutes, and re-check the level on the dipstick with the linkage DOWN. Top up to the upper mark. Check both drain plugs and the strainer cover for leaks." },
  ],
};

const PROC_COOLANT = {
  id: "coolant",
  tag: "C-01",
  name: "Coolant drain & refill",
  interval: "Every 1000 h or 2 years",
  time: "≈ 45 min",
  difficulty: "Easy",
  tools: ["13 mm spanner", "Drain pan", "Funnel", "Hydrometer / refractometer (optional)"],
  parts: [
    { label: "Antifreeze", code: "1.5 L concentrate + 1.5 L water" },
  ],
  steps: [
    { t: "Engine COLD. Open the radiator cap slowly — even cold systems can hold a little pressure." },
    { t: "Open the radiator drain (tap or plug at lower LH side of radiator) and the engine block drain (brass plug, LH side of block, beneath the injection pump)." },
    { t: "Catch the old coolant in a pan — it is toxic to pets and wildlife. Take it to a council recycling centre." },
    { t: "Flush with clean water through the filler until what runs out at the drains is clear. Allow 2–3 fills/flushes if heavily contaminated.", tip: "If you find rust scale or oil in the coolant, investigate before refilling." },
    { t: "Close both drains. Refit any sealing washers." },
    { t: "Pre-mix antifreeze with clean (ideally de-ionised) water 50:50 in a clean jug, then pour slowly through the filler. Squeeze the upper hose to burp air pockets." },
    { t: "Leave the cap OFF. Start the engine and run at fast idle until the thermostat opens (upper hose suddenly warms). Top up as the level drops." },
    { t: "Stop the engine, let it cool, top up to the neck. Refit the cap." },
    { t: "Recheck after the first heat cycle and again the next day. Watch the floor for leaks." },
  ],
};

const GREASE_POINTS = [
  { zone: "Front axle", points: [
    "King-pin upper (×2)", "King-pin lower (×2)", "Tie-rod ends (×2)", "Front axle pivot pin",
  ]},
  { zone: "Steering", points: [
    "Drag link (×2)", "Steering column lower bush",
  ]},
  { zone: "3-point linkage", points: [
    "Lift arm pivots (×2)", "Lower link cross-shaft", "Top link pin", "Stabilisers (×2)",
  ]},
  { zone: "Driveline (4WD)", points: [
    "Front prop-shaft UJ (×2)", "Front prop-shaft slip-yoke",
  ]},
  { zone: "Pedals & misc.", points: [
    "Clutch pedal pivot", "Brake pedal pivots (×2)", "Hand-throttle quadrant (light oil)",
  ]},
];

const TORQUES = [
  { item: "Sump drain plug", value: "30 Nm" },
  { item: "Oil filter (after gasket contact)", value: "¾ turn by hand" },
  { item: "Transmission drain plug", value: "50 Nm" },
  { item: "Hydraulic strainer cover", value: "22 Nm" },
  { item: "Cylinder head bolts (cold)", value: "78 Nm in 3 stages" },
  { item: "Rocker cover", value: "12 Nm" },
  { item: "Injector clamp", value: "20 Nm" },
  { item: "Glow plug", value: "20 Nm" },
  { item: "Wheel nuts — front", value: "100 Nm" },
  { item: "Wheel nuts — rear", value: "165 Nm" },
  { item: "Fan/alternator pivot", value: "45 Nm" },
  { item: "PTO shaft retainer", value: "60 Nm" },
];

const TROUBLES = [
  { sym: "Won't start — cranks but no fire",
    causes: ["Air in fuel system", "Glow plugs not heating", "Stale / waxed diesel", "Stop solenoid (if fitted) stuck"],
    fix: "Bleed fuel system (see F-02). Test glow plugs at 12 V — should pull ≈ 8 A each. Drain & refresh fuel."
  },
  { sym: "White smoke at start, clears warm",
    causes: ["Cold engine, normal", "One glow plug failed", "Low compression on one cylinder"],
    fix: "If persistent past 2 minutes, test glow plug resistance (0.6–1.0 Ω). Compression test if isolated to one cylinder."
  },
  { sym: "Black smoke under load",
    causes: ["Restricted air filter", "Worn / dribbling injector", "Over-fuelling (pump rack)"],
    fix: "Service air filter first (F-03). Have injectors pop-tested if smoke persists."
  },
  { sym: "Blue smoke",
    causes: ["Oil burning — worn valve stem seals, rings, or turbo (n/a here)", "Over-filled sump"],
    fix: "Check oil level first. Compression / leak-down to diagnose."
  },
  { sym: "Hydraulic lift weak or slow",
    causes: ["Low UTTO level", "Blocked suction strainer", "Worn pump", "Relief valve set low"],
    fix: "Check level. Service strainer (F-04). Pressure-test the relief valve (target ≈ 130 bar)."
  },
  { sym: "Overheating",
    causes: ["Air-blocked radiator core (chaff)", "Failed thermostat stuck shut", "Slipping fan belt", "Low coolant / scaled block"],
    fix: "Blow through radiator from engine side. Replace thermostat. Tension belt. Flush system."
  },
  { sym: "Won't engage 4WD",
    causes: ["Sticky shift fork (rust)", "Damaged front prop-shaft", "Worn dog clutch"],
    fix: "Engage with the engine off and tractor rolled forward an inch. Lube the linkage. Inspect prop-shaft."
  },
  { sym: "Battery flat overnight",
    causes: ["Parasitic draw (interior light, glow relay)", "Failed cell", "Alternator not charging"],
    fix: "Measure resting voltage (>12.5 V), check charge at idle (13.8–14.4 V), pull fuses to find draw."
  },
];

// ===================================================================== //
// Reusable building blocks                                              //
// ===================================================================== //

function Procedure({ p, openByDefault = false }) {
  const [open, setOpen] = React.useState(openByDefault);
  const [checked, setChecked] = React.useState(() => p.steps.map(() => false));
  const done = checked.filter(Boolean).length;
  const pct = done / p.steps.length;

  const toggle = (i) => setChecked(prev => prev.map((v, idx) => idx === i ? !v : v));
  const reset = (e) => { e.stopPropagation(); setChecked(p.steps.map(() => false)); };

  return (
    <div className={"proc" + (open ? " open" : "")} id={p.id}>
      <div className="proc-head" onClick={() => setOpen(o => !o)}>
        <div className="proc-title">
          <span className="proc-tag">{p.tag}</span>
          <span className="proc-name">{p.name}</span>
        </div>
        <div className="proc-meta">
          <span>⏱ <strong>{p.time}</strong></span>
          <span>↻ <strong>{p.interval.split(" / ")[0].replace("Every ", "")}</strong></span>
          <span className="proc-chev">▸</span>
        </div>
      </div>
      <div className="proc-body">
        <div className="grid grid-3" style={{marginBottom: 18}}>
          <div className="stat"><div className="stat-label">Interval</div><div className="stat-value" style={{fontSize: 13}}>{p.interval}</div></div>
          <div className="stat"><div className="stat-label">Time</div><div className="stat-value">{p.time}</div></div>
          <div className="stat"><div className="stat-label">Difficulty</div><div className="stat-value" style={{fontSize: 15}}>{p.difficulty}</div></div>
        </div>

        <h4>Parts</h4>
        <div className="parts-strip">
          {p.parts.map((pt, i) => (
            <span className="part-pill" key={i}>
              <span className="label">{pt.label}</span>
              <span className="mono">{pt.code}</span>
            </span>
          ))}
        </div>

        <h4>Tools</h4>
        <p style={{fontSize: 14, color: "var(--ink-2)"}}>{p.tools.join(" · ")}</p>

        <h4>Procedure</h4>
        <div className="step-bar">
          <div className="step-bar-progress" style={{"--p": pct}} />
          <div className="step-bar-text">{done} / {p.steps.length} done</div>
          <button onClick={reset}>Reset</button>
        </div>

        {p.steps.map((s, i) => (
          <div key={i} className={"step" + (checked[i] ? " done" : "")}>
            <button className={"step-check" + (checked[i] ? " done" : "")} onClick={() => toggle(i)} aria-label={"step " + (i+1)} />
            <div className="step-body">
              <div>
                <span className="step-num mono">{String(i+1).padStart(2, "0")}</span>
                <span className="step-text">{s.t}</span>
              </div>
              {s.tip && <div className="step-tip">→ {s.tip}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecHead({ num, title, italic, lede }) {
  return (
    <React.Fragment>
      <div className="sec-head">
        <span className="sec-num">§{num}</span>
        <h2 className="sec-title">{title} {italic && <span className="it">{italic}</span>}</h2>
      </div>
      {lede && <p className="sec-lede">{lede}</p>}
    </React.Fragment>
  );
}

// ===================================================================== //
// Sections                                                              //
// ===================================================================== //

function SectionOverview() {
  return (
    <section data-section="overview" data-screen-label="01 Overview">
      <div className="hero">
        <div className="hero-eyebrow">Service & Maintenance · Edition 2026 · UK</div>
        <h1 className="hero-title">Yanmar <span className="it">F175</span><br/>service guide</h1>
        <p className="hero-sub">
          A step-by-step workshop reference for the compact Japanese-built F175 — covering scheduled
          servicing, the four filter changes, fluids and capacities, torque values, and UK parts
          sourcing. Written for the home mechanic with a torque wrench and a Saturday morning.
        </p>
      </div>

      <div className="meta-strip">
        <div className="meta-item"><span className="meta-k">Engine</span><span className="meta-v">3T75HA · 899 cc</span></div>
        <div className="meta-item"><span className="meta-k">Power</span><span className="meta-v">17 hp @ 2600 rpm</span></div>
        <div className="meta-item"><span className="meta-k">Drive</span><span className="meta-v">4WD selectable</span></div>
        <div className="meta-item"><span className="meta-k">Mass</span><span className="meta-v">≈ 640 kg</span></div>
        <div className="meta-item"><span className="meta-k">PTO</span><span className="meta-v">540 rpm · live</span></div>
      </div>

      <h3 style={{marginTop: 48}}>About this tractor</h3>
      <p>
        The F175 is a Japanese-domestic-market compact tractor built by Yanmar between roughly 1984
        and the mid-1990s. It was never officially sold in the UK, so almost every example here is
        a grey import — meaning service literature can be patchy and parts hunting needs a little
        cross-referencing. The good news: mechanically the F175 is closely related to the YM-series
        and shares filters, gaskets, and many wear items with several Yanmar models still in
        production support.
      </p>

      <h3>Before you start</h3>
      <div className="callout">
        <span className="callout-tag">Verify before ordering</span>
        Yanmar refined the F175 across its run. Always check part numbers against the engine and
        chassis plates before placing an order — particularly belts, gaskets, and the head set.
      </div>
      <div className="callout warn">
        <span className="callout-tag">Safety</span>
        Park on level ground, handbrake on, key out, PTO disengaged. Work on a cold engine for
        cooling-system, valve, and injector tasks. Wear gloves when handling diesel and used oil.
      </div>
      <div className="callout danger">
        <span className="callout-tag">Diesel injection</span>
        Never crack high-pressure injector pipes with your finger underneath. Pinhole leaks at
        13,500+ kPa will inject diesel into your bloodstream. Use rag and distance.
      </div>

      <h3>Specifications</h3>
      <div className="specblock">
        {Object.entries(SPECS).map(([k, v]) => (
          <React.Fragment key={k}>
            <div className="k">{k.charAt(0).toUpperCase()+k.slice(1)}</div>
            <div className="v">{v}</div>
          </React.Fragment>
        ))}
      </div>

      <h3>Capacities</h3>
      <div className="grid grid-3">
        {CAPACITIES.map((c, i) => (
          <div className="stat" key={i}>
            <div className="stat-label">{c.k}</div>
            <div className="stat-value">{c.v}</div>
            {c.t && <div style={{fontSize: 11, color: "var(--ink-3)", marginTop: 4}}>{c.t}</div>}
          </div>
        ))}
      </div>

      <h3>Fluids</h3>
      <div className="table-scroll">
        <table>
          <thead><tr><th>Application</th><th>Specification</th><th>Notes</th></tr></thead>
          <tbody>
            {FLUIDS.map((f, i) => (
              <tr key={i}>
                <td style={{fontWeight: 500}}>{f.k}</td>
                <td className="mono">{f.spec}</td>
                <td style={{color: "var(--ink-3)"}}>{f.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function SectionSchedule() {
  return (
    <section data-section="schedule" data-screen-label="02 Service schedule">
      <SecHead num="02" title="Service" italic="schedule"
        lede="Hour-based intervals, in line with Yanmar's original service tables. Whichever comes first — hours on the clock or the calendar — drives the work." />

      <div className="timeline">
        {SCHEDULE.map((row, i) => (
          <div className={"tl-row" + (row.major ? " major" : "")} key={i}>
            <div className="tl-hours">
              {row.hours.split(" / ")[0]}
              {row.hours.includes("/") && <small>{row.hours.split(" / ").slice(1).join(" / ")}</small>}
            </div>
            <div className="tl-tasks">
              {row.tasks.map((t, j) => (
                <span className={"tl-task " + t.kind} key={j}>
                  {t.kind === "replace" ? "↻ " : "✓ "}{t.t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="callout">
        <span className="callout-tag">Reading the schedule</span>
        Dark pills are <strong>replace</strong> items; light pills are <strong>check / clean</strong>.
        First-50-hour run-in is non-negotiable on a freshly-rebuilt or newly-imported tractor — fresh
        machining swarf settles into the oil and must come out.
      </div>
    </section>
  );
}

function SectionFilters() {
  return (
    <section data-section="filters" data-screen-label="03 Filter changes">
      <SecHead num="03" title="Filter" italic="changes"
        lede="Four filters keep the F175 alive: engine oil, fuel, air, and the hydraulic/transmission suction strainer. Each procedure below is self-contained — click to expand the steps and tick them off as you go." />

      <Procedure p={PROC_ENGINE_OIL} openByDefault={true} />
      <Procedure p={PROC_FUEL} />
      <Procedure p={PROC_AIR} />
      <Procedure p={PROC_HYD} />
    </section>
  );
}

function SectionFluids() {
  return (
    <section data-section="fluids" data-screen-label="04 Cooling, grease, valves">
      <SecHead num="04" title="Cooling, grease &" italic="adjustments"
        lede="The non-filter scheduled jobs. Coolant on a long interval, grease often, and a valve check once a season." />

      <Procedure p={PROC_COOLANT} openByDefault={true} />

      <h3>Greasing points ({GREASE_POINTS.reduce((n, z) => n + z.points.length, 0)} total)</h3>
      <p>Pump 2–3 strokes per nipple every 50 hours, or after any wet/muddy session. Wipe each nipple clean before connecting — grit pumped in past the ball is worse than no grease at all.</p>
      <div className="grid grid-2">
        {GREASE_POINTS.map((g, i) => (
          <div key={i} style={{padding: 14, background: "var(--paper-2)", border: "1px solid var(--rule)"}}>
            <div style={{fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 8}}>{g.zone}</div>
            <ul style={{margin: 0, paddingLeft: 16, fontSize: 14, lineHeight: 1.7, color: "var(--ink-2)"}}>
              {g.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h3>Valve clearances</h3>
      <p>Check every 400 hours, engine stone cold. Set on the compression stroke for each cylinder.</p>
      <div className="grid grid-2">
        <div className="stat"><div className="stat-label">Intake</div><div className="stat-value">0.20 mm</div><div style={{fontSize: 11, color: "var(--ink-3)"}}>cold</div></div>
        <div className="stat"><div className="stat-label">Exhaust</div><div className="stat-value">0.20 mm</div><div style={{fontSize: 11, color: "var(--ink-3)"}}>cold</div></div>
      </div>
      <div className="callout warn">
        <span className="callout-tag">Order</span>
        Turn the crank by hand (fan belt) until the timing mark on the pulley aligns with TDC for #1. Both #1 valves should be loose. Set #1 intake and exhaust, rotate 240° to set #2, another 240° for #3.
      </div>
    </section>
  );
}

function SectionParts() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("All");
  const filtered = PARTS.filter(p => {
    if (cat !== "All" && p.cat !== cat) return false;
    if (!q) return true;
    const s = (p.name + " " + p.yanmar + " " + p.alts.join(" ") + " " + p.suppliers + " " + p.notes).toLowerCase();
    return s.includes(q.toLowerCase());
  });

  return (
    <section data-section="parts" data-screen-label="05 UK parts list">
      <SecHead num="05" title="UK parts" italic="list"
        lede="Genuine Yanmar part numbers alongside commonly stocked UK aftermarket equivalents. Prices are typical 2026 retail and exclude VAT/post; treat them as orientation, not gospel." />

      <div className="toolbar">
        <input className="search-input" placeholder="Search parts, numbers, suppliers..." value={q} onChange={e => setQ(e.target.value)} />
        <div className="filter-chips">
          {PART_CATS.map(c => (
            <button key={c} className={"chip" + (cat === c ? " on" : "")} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{fontSize: 12, color: "var(--ink-3)", marginBottom: 8, fontFamily: '"JetBrains Mono", monospace'}}>
        Showing {filtered.length} / {PARTS.length}
      </div>

      {/* Desktop table */}
      <div className="parts-table-wrap" style={{overflowX: "auto"}}>
        <table>
          <thead>
            <tr>
              <th style={{width: "20%"}}>Part</th>
              <th style={{width: "16%"}}>Yanmar №</th>
              <th>UK aftermarket cross-refs</th>
              <th style={{width: "12%"}}>Price (≈)</th>
              <th style={{width: "16%"}}>Suppliers</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={i}>
                <td>
                  <div style={{fontWeight: 500}}>{p.name}</div>
                  <div style={{fontSize: 11, color: "var(--ink-3)", marginTop: 2}}>{p.cat} {p.notes && "· " + p.notes}</div>
                </td>
                <td className="mono">{p.yanmar}</td>
                <td>
                  <div style={{display: "flex", flexWrap: "wrap", gap: 4}}>
                    {p.alts.map((a, j) => (
                      <span key={j} className="mono" style={{fontSize: 12, padding: "2px 7px", background: "var(--paper-2)", border: "1px solid var(--rule)"}}>{a}</span>
                    ))}
                  </div>
                </td>
                <td className="mono">{p.price}</td>
                <td style={{fontSize: 12, color: "var(--ink-2)"}}>{p.suppliers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="parts-cards">
        {filtered.map((p, i) => (
          <div className="pcard" key={i}>
            <div className="pcard-head">
              <div>
                <div className="pcard-name">{p.name}</div>
                {p.notes && <div className="pcard-notes">{p.notes}</div>}
              </div>
              <div className="pcard-cat">{p.cat}</div>
            </div>
            <div className="pcard-row">
              <div className="k">Yanmar</div>
              <div className="v mono">{p.yanmar}</div>
            </div>
            <div className="pcard-row">
              <div className="k">UK alt</div>
              <div className="v">
                <div className="pcard-alts">
                  {p.alts.map((a, j) => <span className="pcard-alt" key={j}>{a}</span>)}
                </div>
              </div>
            </div>
            <div className="pcard-row">
              <div className="k">Price</div>
              <div className="v mono">{p.price}</div>
            </div>
            <div className="pcard-row">
              <div className="k">Source</div>
              <div className="v" style={{fontSize: 12, color: "var(--ink-2)"}}>{p.suppliers}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{padding: 24, textAlign: "center", color: "var(--ink-3)", border: "1px dashed var(--rule)", fontSize: 13}}>
            Nothing matches “{q}”.
          </div>
        )}
      </div>

      <div className="callout" style={{marginTop: 24}}>
        <span className="callout-tag">UK supplier shortlist</span>
        <div className="grid grid-2" style={{marginTop: 6, gap: 8}}>
          <div><strong>Malpas Online</strong> — strong on grey-import Yanmar / Iseki / Kubota.</div>
          <div><strong>JapaneseTractorSpares.co.uk</strong> — F-series specialists.</div>
          <div><strong>Sparex / Sparex.com</strong> — general agri-replacement parts.</div>
          <div><strong>AgriParts UK, Bates Tractors</strong> — filters, gaskets, electrics.</div>
          <div><strong>Hifi Filter UK</strong> — direct cross-references by Yanmar number.</div>
          <div><strong>Carrs Billington / Mole Valley Farmers</strong> — fluids & grease in bulk.</div>
        </div>
      </div>
    </section>
  );
}

function SectionTorque() {
  return (
    <section data-section="torque" data-screen-label="06 Torque & troubleshooting">
      <SecHead num="06" title="Torque values &" italic="troubleshooting"
        lede="A quick-reference torque card and a symptom-driven fault guide for the issues that put F175s in the workshop most often." />

      <h3>Torque values</h3>
      <div className="grid grid-2">
        <div className="table-scroll">
          <table>
            <thead><tr><th>Fastener</th><th>Torque</th></tr></thead>
            <tbody>
              {TORQUES.slice(0, 6).map((t, i) => (
                <tr key={i}><td>{t.item}</td><td className="mono">{t.value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Fastener</th><th>Torque</th></tr></thead>
            <tbody>
              {TORQUES.slice(6).map((t, i) => (
                <tr key={i}><td>{t.item}</td><td className="mono">{t.value}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h3 style={{marginTop: 48}}>Troubleshooting</h3>
      <div style={{display: "flex", flexDirection: "column", gap: 14}}>
        {TROUBLES.map((tr, i) => (
          <details key={i} style={{background: "var(--paper-2)", border: "1px solid var(--rule)", padding: "14px 18px"}}>
            <summary style={{cursor: "pointer", fontSize: 16, fontWeight: 500, color: "var(--ink)"}}>
              <span className="mono" style={{fontSize: 11, color: "var(--accent)", marginRight: 10}}>T-{String(i+1).padStart(2,"0")}</span>
              {tr.sym}
            </summary>
            <div style={{marginTop: 14, fontSize: 14}}>
              <div style={{display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10}}>
                {tr.causes.map((c, j) => (
                  <span key={j} style={{padding: "3px 9px", background: "var(--paper)", border: "1px solid var(--rule)", fontSize: 12, color: "var(--ink-2)"}}>{c}</span>
                ))}
              </div>
              <div style={{color: "var(--ink-2)", lineHeight: 1.55}}><strong style={{color: "var(--ink)"}}>Approach: </strong>{tr.fix}</div>
            </div>
          </details>
        ))}
      </div>

      <h3 style={{marginTop: 48}}>Service log</h3>
      <ServiceLog />
    </section>
  );
}

function ServiceLog() {
  const [rows, setRows] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem("f175-log") || "[]"); }
    catch { return []; }
  });
  const [draft, setDraft] = React.useState({date: "", hours: "", work: ""});

  React.useEffect(() => {
    localStorage.setItem("f175-log", JSON.stringify(rows));
  }, [rows]);

  const add = () => {
    if (!draft.date && !draft.hours && !draft.work) return;
    setRows([{...draft, id: Date.now()}, ...rows]);
    setDraft({date: "", hours: "", work: ""});
  };
  const del = (id) => setRows(rows.filter(r => r.id !== id));

  return (
    <div>
      <p style={{fontSize: 14}}>A persistent service log lives in your browser. Useful for keeping track between visits; not a substitute for the paper book that lives with the tractor.</p>
      <div className="log-grid">
        <input className="search-input" placeholder="Date" value={draft.date} onChange={e => setDraft({...draft, date: e.target.value})}/>
        <input className="search-input" placeholder="Hours" inputMode="numeric" value={draft.hours} onChange={e => setDraft({...draft, hours: e.target.value})}/>
        <input className="search-input work" placeholder="Work carried out (oil & filter, greased linkage, etc.)" value={draft.work} onChange={e => setDraft({...draft, work: e.target.value})}/>
        <button className="add" onClick={add} style={{padding: "12px 22px", background: "var(--accent)", color: "var(--paper)", border: "none", cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", fontSize: 12, fontFamily: "inherit", fontWeight: 600}}>Add entry</button>
      </div>
      {rows.length > 0 ? (
        <div className="table-scroll">
          <table>
            <thead><tr><th style={{width: 120}}>Date</th><th style={{width: 80}}>Hours</th><th>Work</th><th style={{width: 30}}></th></tr></thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id}>
                  <td className="mono">{r.date || "—"}</td>
                  <td className="mono">{r.hours || "—"}</td>
                  <td>{r.work}</td>
                  <td><button onClick={() => del(r.id)} style={{background: "transparent", border: "none", color: "var(--ink-3)", cursor: "pointer", fontSize: 20, padding: "4px 8px", minHeight: 32}}>×</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{padding: 24, textAlign: "center", color: "var(--ink-3)", border: "1px dashed var(--rule)", fontSize: 13}}>
          No entries yet. Add the next service and it'll stick around until you clear your browser.
        </div>
      )}
    </div>
  );
}

// expose
Object.assign(window, {
  SectionOverview, SectionSchedule, SectionFilters, SectionFluids, SectionParts, SectionTorque,
});
