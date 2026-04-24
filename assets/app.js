
const DATA = {"scenarios": {"1": {"name": "Supercharged Cape", "color": "rgb(29, 78, 216)", "description": "Exponential AI + widespread readiness", "dynamic": "Acceleration and concentration around advanced AI, data, and governance capability", "employment": "Growth in advanced roles; contraction in routine support and lower-level coding", "risk": "Acute brain drain as global remote competition intensifies for AI-ready talent", "sectors": {"ICT": "AI engineering, data architecture, cybersecurity roles expand", "BPO": "Bot supervision, analytics, automation design emerge", "Tourism": "More role hybridisation than displacement", "Manufacturing": "Rising demand for digitally-enabled technicians"}, "signposts": ["Rate of agentic AI deployment in WC BPO operations", "ICT vacancy composition: ratio of AI/data roles to traditional support", "SMMEE AI tool adoption rate in WC tourism", "TVET enrolment in AI-adjacent programmes"]}, "2": {"name": "The displacement trap", "color": "rgb(220, 38, 38)", "description": "Exponential AI + limited readiness", "dynamic": "Talent siege with extreme polarisation between the AI elite and the contracting routine base", "employment": "Polarised: growth at the top, contraction at the base, hollowed middle", "risk": "Skills paradox becomes a chasm; smaller WC firms cannot compete for talent", "sectors": {"ICT": "Extreme polarisation between elite and routine", "BPO": "Sharp contraction in entry-level and routine transaction roles", "Tourism": "Market share loss for digitally excluded operators", "Manufacturing": "Workforce unable to operate or maintain new systems"}, "signposts": ["BPO employment contraction rate in routine transaction roles", "Youth unemployment trajectory in the WC vs national baseline", "TVET digital programme completion and employer absorption rates", "Manufacturing subsector production divergence"]}, "3": {"name": "Co-Pilot Province", "color": "rgb(14, 116, 144)", "description": "Incremental AI + widespread readiness", "dynamic": "Augmented productivity through steady human-AI collaboration; hybrid roles expand", "employment": "Stable to growing; demand broadens across hybrid roles", "risk": "Complacency: assumption that incremental change is permanent", "sectors": {"ICT": "Augmented productivity through hybrid roles", "BPO": "Managed transition from voice-dominant to omnichannel services", "Tourism": "Practical digital deepening at a manageable pace", "Manufacturing": "Steady digitalisation with mid-level gap narrowing"}, "signposts": ["Human-AI team configuration adoption rates across WC sectors", "BPO employment growth vs national trajectory", "SMME digital platform adoption in WC tourism", "Training programme relevance ratings from employers"]}, "4": {"name": "Stalled and stratified", "color": "rgb(51, 65, 85)", "description": "Incremental AI + limited readiness", "dynamic": "Hollowed middle: specialist scarcity persists while competitiveness erodes slowly", "employment": "Flat: no transformative pressure, but no capability to capitalise either", "risk": "Province retains hub status, but competitiveness erodes relative to other jurisdictions", "sectors": {"ICT": "Specialist scarcity persists while competitiveness erodes", "BPO": "Low-value lock-in; progression gap from entry-level to digital operations", "Tourism": "Analogue persistence; digital potential unrealised", "Manufacturing": "Dual economy persists; training system unresponsive"}, "signposts": ["Foundational digital work readiness scores at labour market entry", "BPO value chain composition: share from traditional vs BPaaS", "Tourism SMME digital platform performance metrics", "SETA programme relevance and employer absorption rates"]}}, "skills": {"ICT": {"emerging": ["AI engineering and integration", "Data architecture and engineering", "Cloud platform engineering (AWS, Azure, GCP)", "Cybersecurity governance and architecture", "MLOps and model evaluation", "Product thinking and systems design", "Ethical reasoning and AI responsibility"], "declining": ["Routine code support and scripting", "Manual testing and QA", "Lower-level infrastructure management", "Basic IT support and administration", "Single-technology specialisation"], "pathways": [{"level": "Entry (0-2 years)", "roles": "Junior developer, support engineer, QA analyst", "skills": "Cloud fundamentals, basic programming, platform literacy, collaboration tools"}, {"level": "Mid (2-5 years)", "roles": "Developer, systems engineer, data analyst, QA specialist", "skills": "Cloud proficiency, data literacy, security fundamentals, problem-solving, team collaboration"}, {"level": "Advanced (5+ years)", "roles": "Senior engineer, architect, lead engineer, security specialist, data scientist", "skills": "System design, AI integration, governance, mentoring, strategic thinking"}]}, "BPO": {"emerging": ["AI-supported customer operations", "Customer relationship management (CRM) fluency", "Workflow automation and orchestration", "Quality assurance and compliance", "Analytics and customer intelligence", "Omnichannel service design", "Escalation judgment and problem-solving"], "declining": ["Voice-dominant transaction processing", "Scripted call handling", "Single-channel service delivery", "Low-complexity administrative tasks", "Manual data entry and processing"], "pathways": [{"level": "Entry (0-2 years)", "roles": "Customer service agent, process coordinator", "skills": "CRM basics, communication, AI-assisted tools, platform literacy, customer empathy"}, {"level": "Mid (2-5 years)", "roles": "Team lead, QA specialist, operations analyst, automation coordinator", "skills": "Workflow management, analytics interpretation, problem-solving, leadership, compliance knowledge"}, {"level": "Advanced (5+ years)", "roles": "Operations manager, service architect, automation designer, compliance lead", "skills": "Service design, automation strategy, business acumen, governance, strategic leadership"}]}, "Manufacturing": {"emerging": ["Predictive maintenance and diagnostics", "Production data literacy and interpretation", "Digital quality control and process optimisation", "ERP and production systems management", "Supervisor digital fluency and dashboards", "Green-digital capability (energy, efficiency)", "Problem-solving using data and analytics"], "declining": ["Manual quality inspection", "Paper-based planning and scheduling", "Routine monitoring without diagnostics", "Single-skill technical roles", "Low-complexity coordination tasks"], "pathways": [{"level": "Entry (0-2 years)", "roles": "Production operator, quality technician, maintenance support", "skills": "Digital systems basics, data logging, safety protocols, equipment operation, communication"}, {"level": "Mid (2-5 years)", "roles": "Technician, quality specialist, maintenance technician, shift supervisor", "skills": "Diagnostics, data interpretation, ERP use, problem-solving, team coordination, safety leadership"}, {"level": "Advanced (5+ years)", "roles": "Supervisor, maintenance engineer, quality manager, production planner", "skills": "System design, predictive capability, digital twins, strategic planning, continuous improvement"}]}, "Tourism": {"emerging": ["AI-assisted marketing and content creation", "Booking systems and channel management", "Customer data analytics and segmentation", "Revenue and yield optimisation", "Personalised experience design", "Multilingual AI-powered engagement", "Sustainability and local-experience positioning"], "declining": ["Manual booking administration", "Single-channel marketing strategies", "Basic front-desk operations", "Static pricing and yield management", "Standardised, non-personalised service"], "pathways": [{"level": "Entry (0-2 years)", "roles": "Guest services agent, reservations coordinator, hospitality staff", "skills": "Booking systems, customer service, platform basics, cultural sensitivity, communication"}, {"level": "Mid (2-5 years)", "roles": "Operations supervisor, marketing coordinator, experience designer, guest relations manager", "skills": "Systems management, analytics basics, marketing tools, problem-solving, cultural awareness"}, {"level": "Advanced (5+ years)", "roles": "Operations manager, marketing manager, experience strategist, revenue manager", "skills": "Business strategy, data analytics, brand positioning, experience innovation, sustainability integration"}]}, "Trades": {"emerging": ["Digital diagnostics and troubleshooting", "Smart tools and IoT systems", "Remote support and mobile systems", "Predictive maintenance and monitoring", "Equipment data logging and analysis", "Job management and scheduling systems", "Electric vehicle and renewable energy systems"], "declining": ["Manual fault diagnosis and trial-and-error", "Paper-based job scheduling", "Single-skill specialisation", "Non-digital equipment operation", "Low-complexity routine maintenance"], "pathways": [{"level": "Apprentice (0-2 years)", "roles": "Trade apprentice, junior technician", "skills": "Trade fundamentals, digital tool basics, safety, communication, learning skills"}, {"level": "Qualified (2-5 years)", "roles": "Qualified tradesperson, service technician, specialist", "skills": "Trade mastery, digital diagnostics, remote support, problem-solving, customer interaction"}, {"level": "Advanced (5+ years)", "roles": "Master technician, team lead, service manager, trainer", "skills": "System design, emerging technologies, team leadership, continuous learning, innovation"}]}}, "interventions": {"ICT": {"low_medium": {"focus": "Build foundational capability base", "blocker": "Thin entry and mid-level pipeline depth", "immediate": ["Expand cloud foundation training (AWS, Azure, GCP certifications)", "Build junior developer pathways paired with AI integration modules", "Create supervised apprenticeship models linking bootcamps to real projects"], "medium_term": ["Develop cyber security and data engineering progression pathways", "Partner with employers on work-integrated learning", "Establish AI governance and responsible AI literacy for non-specialists"], "rationale": "ICT has high exposure and near-term acceleration potential. The constraint is pipeline depth. Focus on making entry viable while building capability progression."}, "low_high": {"focus": "Urgent: Pipeline expansion with quality gates", "blocker": "Risk of talent siege if readiness doesn't match exposure", "immediate": ["Accelerate cloud engineering and AI integration training (capacity urgency)", "Implement employer-co-designed curricula to ensure relevance", "Fast-track cyber security foundational skills to address immediate gaps"], "medium_term": ["Build AI specialisation pathways (MLOps, model evaluation, AI governance)", "Create leadership and architecture development programmes", "Establish retention strategies to prevent brain drain to global opportunities"], "rationale": "High exposure + low readiness = risk. Act quickly on volume and quality. The constraint is speed and relevance of capability building."}, "moderate_medium": {"focus": "Strengthen progression and specialisation", "blocker": "Thin entry and mid-level pipeline depth", "immediate": ["Deepen cloud, cyber, data engineering capability at mid-levels", "Build AI integration and governance skills for experienced developers", "Create specialist pathways in emerging areas (AI, security, data)"], "medium_term": ["Establish learning communities and peer-mentoring for continuous capability", "Develop product and systems thinking alongside technical depth", "Link specialist development to industry certification standards"], "rationale": "Moderate readiness means you have a base. Use it. Build upward into emerging specialisations where global demand is highest."}, "moderate_high": {"focus": "Parallel track: expand volume AND deepen specialty", "blocker": "Need both pipeline breadth and capability depth simultaneously", "immediate": ["Scale entry-level cloud and AI literacy training (volume)", "Accelerate mid-to-senior progression in data, cyber, AI (specialty)", "Create fast-track pathways for existing workers with foundation capability"], "medium_term": ["Establish AI integration competency centres tied to real projects", "Build leadership capability in technical teams", "Create international visibility for senior WC talent (retention through growth)"], "rationale": "High exposure + moderate readiness means opportunity with urgency. You need to scale breadth (entry) while deepening specialty (mid/senior). Parallel tracks."}, "high_medium": {"focus": "Leverage strength: move into specialisation and leadership", "blocker": "Thin entry and mid-level pipeline depth (but you have a good base)", "immediate": ["Deepen AI, data architecture, and governance capability (leverage strength)", "Build product thinking and systems design for technical teams", "Create supervisor and technical leadership pathways"], "medium_term": ["Develop thought leadership and community roles (position WC as hub)", "Build research and innovation partnerships with universities and tech firms", "Create executive and strategic capability development"], "rationale": "You're strong. Use it. Move from execution into architecture and leadership. Position as a capability centre, not just a production hub."}, "high_high": {"focus": "Sustain leadership: specialise and internationalise", "blocker": "Risk of complacency if you assume pace remains steady", "immediate": ["Invest in frontier capabilities (agentic AI, advanced data science, quantum-ready)", "Build technical leadership and mentoring infrastructure", "Create specialised pathways for architecture and governance roles"], "medium_term": ["Establish research and innovation hubs tied to industry problems", "Develop reputation and thought leadership in AI and data domains", "Create international partnerships and talent attraction initiatives"], "rationale": "You're positioned as a leader. Maintain that through continuous evolution into emerging domains and by creating a learning and innovation culture."}}, "BPO": {"low_medium": {"focus": "Transform training away from legacy service model", "blocker": "Entry-level workforce still trained for legacy service models", "immediate": ["Redesign entry-level training: shift from scripted-call-handling to AI-supported customer operations", "Build CRM, workflow automation, and platform fluency into foundation curriculum", "Create quality assurance and escalation judgment skills training"], "medium_term": ["Develop supervisor and team-lead capability for AI-enabled service management", "Build analytics and customer intelligence skills for service design roles", "Establish privacy, compliance, and ethical decision-making training"], "rationale": "BPO is near-term acceleration with high exposure. The blocker is that entry-level training is outdated. Redesign entry to prepare for the actual work."}, "low_high": {"focus": "Urgent pivot: training redesign + capability conversion", "blocker": "Displacement risk if training doesn't catch up to exposure", "immediate": ["Immediately pivot entry-level curriculum to AI-supported operations, not voice transaction handling", "Partner with BPO employers on rapid curriculum redesign and validation", "Accelerate training in workflow tools, CRM, QA, and escalation judgment"], "medium_term": ["Build automation design and bot supervision capability", "Develop advanced service design and analytics skills", "Create progression pathways from operational roles into higher-value design and management"], "rationale": "High exposure + low readiness = displacement risk. Act on training redesign immediately. The entry-level workforce cannot transition unless training changes."}, "moderate_medium": {"focus": "Strengthen progression from transaction to operations", "blocker": "Entry-level workforce still trained for legacy service models", "immediate": ["Build platform fluency and digital operations capability into supervisor/team-lead roles", "Create AI-supported customer operations training modules", "Develop analytics and business intelligence skills for operational staff"], "medium_term": ["Establish progression pathways from transaction roles into platform operations and automation", "Build customer experience design and personalisation capability", "Create learning culture where workers adapt to tool changes continuously"], "rationale": "You have a moderate base. Use it to move workers upward into operations and analytics roles. The constraint is progression, not volume."}, "moderate_high": {"focus": "Parallel: scale volume AND build management capability", "blocker": "Need entry-level pipeline expansion AND manager/designer capability", "immediate": ["Scale entry-level training in AI-supported customer operations (volume)", "Accelerate supervisor and team-lead development in automation and platform management (quality)", "Build analytics and service design skills in mid-level roles"], "medium_term": ["Create BPaaS architecture and intelligent workflow design capability", "Develop leadership in AI-enabled service delivery", "Build innovation and process improvement competency centres"], "rationale": "Moderate readiness + high exposure = growth opportunity with urgency. Scale entry, but simultaneously build the supervisory and design capability to lead the transformation."}, "high_medium": {"focus": "Leverage strength: move into BPaaS and automation design", "blocker": "Entry-level workforce still trained for legacy service models (but you have capability foundation)", "immediate": ["Develop automation design and bot supervision from existing experienced staff", "Build service architecture and platform capability (leverage your strongest people)", "Create designer and analyst pathways from operational roles"], "medium_term": ["Build thought leadership in BPaaS delivery models", "Create specialised centres for automation design and workflow optimisation", "Develop executive capability in digital service transformation"], "rationale": "You're strong in operations. Use it. Move into design, automation, and architecture. Create centres of excellence that position you as a high-value provider."}, "high_high": {"focus": "Sustain leadership: innovate in service delivery models", "blocker": "Risk of complacency or being outpaced by emerging global competitors", "immediate": ["Invest in frontier BPaaS capabilities: agentic AI, autonomous workflows, outcome-based pricing", "Build executive and strategic leadership capability", "Create research and innovation partnerships with technology firms"], "medium_term": ["Establish specialised centres in emerging service domains (AI consulting, data analytics, automation)", "Develop thought leadership and industry visibility", "Create international talent attraction and retention strategies"], "rationale": "You're a leader. Maintain that by staying ahead of capability evolution. Invest in frontier areas and create a learning and innovation culture."}}, "Manufacturing": {"low_medium": {"focus": "Build applied digital capability in shop-floor operations", "blocker": "Many firms are too weakly digitised to absorb AI well", "immediate": ["Target predictive maintenance training: diagnostics, sensor data, system monitoring", "Build production data literacy and interpretation capability", "Create digital quality control and process optimisation skills"], "medium_term": ["Develop supervisor digital fluency: dashboards, KPIs, data-driven decision-making", "Build ERP and production systems capability for planners and operators", "Create problem-solving skills using data and analytics"], "rationale": "Manufacturing is conditional transition with low-moderate readiness. The blocker is weak applied capability in diagnostics and data. Start there."}, "low_high": {"focus": "Urgent: targeted plant-level digitisation capability building", "blocker": "Many firms cannot operate or troubleshoot new systems", "immediate": ["Accelerate predictive maintenance and industrial diagnostics training (most urgent)", "Build production data and ERP system capability for core roles", "Create digital troubleshooting and maintenance skills in technician pathways"], "medium_term": ["Develop supervisor capability in digital production management", "Build quality control and process optimisation using data", "Create upskilling pathways for workers in firms making digital investments"], "rationale": "High exposure + low readiness = risk that firms automate without workers being ready. Focus on immediate capability for newly digitised plants."}, "moderate_medium": {"focus": "Deepen capability in digitally-enabling firms, extend to lagging subsectors", "blocker": "Many firms are too weakly digitised to absorb AI well", "immediate": ["Strengthen predictive maintenance and industrial diagnostics in advanced firms", "Build applied digital operations capability in lagging firms (food/beverage, tooling)", "Create supervisor digital fluency and data-driven decision-making"], "medium_term": ["Establish sectoral learning communities: share digitisation lessons across subsectors", "Develop advanced roles in production data and digital twins", "Create safety and quality capability in newly digitised processes"], "rationale": "Moderate readiness means you have some advanced firms and some lagging ones. Deepen the advanced, uplift the lagging through targeted, sectoral approaches."}, "moderate_high": {"focus": "Parallel: uplift lagging firms AND develop advanced capability", "blocker": "Dual economy widening between digitally mature and lagging firms", "immediate": ["Scale basic digital operations capability across all firms (data literacy, systems use)", "Accelerate predictive maintenance and diagnostics in advanced firms (specialty)", "Create supervisor digital fluency as a priority across the sector"], "medium_term": ["Develop advanced roles in production analytics, digital twins, and IoT", "Build learning pathways so workers can move between firms and up the value chain", "Establish innovation and improvement competency centres in strong firms"], "rationale": "Moderate readiness + high exposure = opportunity to narrow the dual economy. Scale broad capability (uplift lagging), deepen specialty (advanced)."}, "high_medium": {"focus": "Leverage strength: move into advanced production systems and green-digital", "blocker": "Many firms are too weakly digitised to absorb AI well (but you have capability)", "immediate": ["Build advanced roles in digital twins, IoT, and production analytics from your strong base", "Develop green-digital capability: energy monitoring, efficiency optimisation, emissions data", "Create research partnerships with advanced manufacturing centres"], "medium_term": ["Establish centres of excellence in predictive maintenance and autonomous systems", "Build executive capability in digital transformation leadership", "Create thought leadership and knowledge-sharing roles"], "rationale": "You're strong. Use it. Move into advanced domains (digital twins, green-digital, innovation). Position your sector as a capability leader."}, "high_high": {"focus": "Sustain leadership: frontier manufacturing and green-digital integration", "blocker": "Risk of complacency or being outpaced by global competitors", "immediate": ["Invest in frontier capabilities: autonomous production systems, AI-driven optimisation, digital twins", "Build green-digital leadership: renewable energy integration, circular economy, emissions reduction", "Create research and innovation partnerships with technology and sustainability leaders"], "medium_term": ["Establish specialised centres in Industry 4.0 and green-digital manufacturing", "Develop executive and strategic capability", "Create international visibility for advanced manufacturing practices"], "rationale": "You're a leader in capability. Maintain that by investing in frontier areas and creating integration between digital and green-digital systems."}}, "Tourism": {"low_medium": {"focus": "Build practical SMME digital fluency, not theory", "blocker": "Weak SMME digital fluency", "immediate": ["Focus on immediate business tools: booking systems, CRM, basic analytics", "Build AI-assisted marketing and content capability (e.g., review analysis, content generation)", "Create practical revenue optimisation and yield management skills"], "medium_term": ["Develop omnichannel marketing and customer engagement capability", "Build data literacy for local, personalised, and experience-based marketing", "Create customer experience design skills"], "rationale": "Tourism has medium exposure and low-moderate readiness. The blocker is SMME digital fluency. Focus on practical, immediately useful tools and skills."}, "low_high": {"focus": "Urgent: SMME digital capability to prevent competitive exclusion", "blocker": "Digitally excluded operators at risk of market share loss", "immediate": ["Fast-track booking systems and CRM implementation support for SMEs", "Build AI-assisted marketing skills (content, review management, personalisation)", "Create practical yield and revenue management capability"], "medium_term": ["Develop customer analytics and experience design for local differentiation", "Build omnichannel engagement capability", "Create learning support so SMEs can adopt and adapt tools continuously"], "rationale": "High exposure + low readiness = risk of SMME exclusion. Act urgently on practical tool adoption and AI-assisted capabilities."}, "moderate_medium": {"focus": "Lift SMME capability from basic to strategic use of tools", "blocker": "Weak SMME digital fluency", "immediate": ["Move SMEs from basic digital awareness to strategic use: yield management, customer analytics", "Build AI-assisted marketing and personalisation skills", "Create experience design and human-centred service capability"], "medium_term": ["Develop data-informed decision-making for marketing, pricing, and product design", "Build omnichannel and digital customer experience design", "Create continuous learning and tool adaptation capability"], "rationale": "Moderate readiness means you have some capability foundation. Use it to move SMEs from adoption to strategic use of tools."}, "moderate_high": {"focus": "Parallel: scale tool adoption AND deepen strategic capability", "blocker": "Need both SMME adoption breadth and strategic depth", "immediate": ["Scale basic digital tool adoption and AI-assisted capabilities across SMEs (breadth)", "Accelerate strategic use (yield management, customer analytics) in advanced operators (depth)", "Build experience design and human-centred differentiation capability"], "medium_term": ["Create SMME learning communities for continuous tool and skill adaptation", "Develop advanced analytics and personalisation capabilities", "Build reputation and positioning skills for local, personalised, and sustainability-linked experiences"], "rationale": "Moderate readiness + high exposure = growth opportunity. Scale adoption broadly, deepen strategic capability in leading SMEs."}, "high_medium": {"focus": "Leverage strength: move into experience design and sustainability positioning", "blocker": "Weak SMME digital fluency (but you have capability foundation)", "immediate": ["Build advanced experience design and personalisation capability (leverage your strength)", "Develop sustainability and green-tourism positioning and marketing", "Create thought leadership in cultural, eco-friendly, and technology-enabled experiences"], "medium_term": ["Establish innovation hubs for tourism experience design and sustainability integration", "Build executive capability in digital transformation and brand positioning", "Create community and partnership models for SMME capability development"], "rationale": "You're strong in capability. Use it. Move into experience design, sustainability, and thought leadership. Help SMEs uplift through community learning."}, "high_high": {"focus": "Sustain leadership: integrate digital, sustainability, and experience innovation", "blocker": "Risk of complacency or being outpaced by global tourism competitors", "immediate": ["Invest in frontier tourism innovations: AI-driven personalisation, immersive experiences, sustainability integration", "Build executive and strategic capability in digital tourism", "Create research and innovation partnerships with tourism and technology leaders"], "medium_term": ["Establish specialised centres in sustainable and digitally-enabled tourism experiences", "Develop thought leadership in African, cultural, and eco-tourism innovation", "Create international visibility for Western Cape tourism innovation"], "rationale": "You're a leader. Maintain that by staying ahead in experience innovation and sustainability integration. Position WC as a global tourism innovation hub."}}, "Trades": {"low_medium": {"focus": "Embed digital diagnostics and smart tools into existing trade pathways", "blocker": "Training equipment and workshop practice lag digital reality", "immediate": ["Integrate digital diagnostics and fault-finding into electrical, mechanical, and service trades", "Build smart tool and mobile system fluency into trade curricula", "Create remote support and troubleshooting capability"], "medium_term": ["Develop predictive maintenance and condition monitoring skills", "Build data logging and equipment performance tracking capability", "Create job management and scheduling system fluency"], "rationale": "Trades have medium exposure and low readiness. The blocker is that training lags practice. Embed digital tools into real trade work, not as separate modules."}, "low_high": {"focus": "Urgent: modernise workshop practice and field-service training", "blocker": "Training equipment and practice lags digital reality", "immediate": ["Urgently embed digital diagnostics into trade curricula (electrical, mechanical, HVAC)", "Modernise workshop equipment to include smart systems and digital tools", "Build remote support and AI-assisted troubleshooting capability"], "medium_term": ["Develop predictive maintenance and IoT sensor capability", "Create mobile field-service system training and data logging skills", "Build safety judgment and decision-making in digital-enabled environments"], "rationale": "High exposure + low readiness = risk of skills obsolescence. Act urgently on workshop modernisation and embedded digital training."}, "moderate_medium": {"focus": "Strengthen digital integration in advanced trades, extend to lagging areas", "blocker": "Training equipment and workshop practice lag digital reality", "immediate": ["Deepen digital diagnostics and smart tool capability in advanced trades", "Build foundational digital fluency across all trades pathways", "Create supervisor and team-lead capability in digital-enabled operations"], "medium_term": ["Develop specialised pathways in emerging areas (renewable energy, electric vehicles, smart building systems)", "Build learning communities across trades to share tool and technique innovation", "Create continuous learning capability for tool and practice adaptation"], "rationale": "Moderate readiness means you have some strong areas. Deepen those, uplift the lagging ones through targeted, trade-specific approaches."}, "moderate_high": {"focus": "Parallel: scale foundational digital AND specialise in emerging areas", "blocker": "Need foundational digital breadth AND emerging specialisation", "immediate": ["Scale foundational digital diagnostics and tool fluency across all trades (breadth)", "Accelerate emerging areas: renewable energy, EV systems, smart building systems (specialty)", "Build supervisor digital fluency and remote-support capability"], "medium_term": ["Develop advanced roles in predictive maintenance and IoT-enabled service", "Create learning pathways between traditional and emerging trade areas", "Build innovation in tool design and service delivery models"], "rationale": "Moderate readiness + high exposure = opportunity to modernise and specialise. Scale foundation skills, invest in emerging areas."}, "high_medium": {"focus": "Leverage strength: lead in emerging trades and green-tech integration", "blocker": "Training equipment and workshop practice lag digital reality (but you have capability)", "immediate": ["Build leadership in emerging trade areas: renewable energy, electric vehicles, smart systems (leverage strength)", "Create research partnerships with technology and green-tech providers", "Establish centres of excellence in digital-enabled trade practice"], "medium_term": ["Develop thought leadership in future of skilled trades", "Build executive capability in trade sector digital transformation", "Create community and mentoring models for capability development across the sector"], "rationale": "You're strong. Use it. Lead in emerging areas (renewables, EVs, smart systems) and help the broader sector modernise."}, "high_high": {"focus": "Sustain leadership: integrate green-tech, AI diagnostics, and autonomous systems", "blocker": "Risk of complacency or being outpaced by global technology evolution", "immediate": ["Invest in frontier trade capabilities: AI-driven diagnostics, autonomous systems, renewable energy specialisation", "Build executive and strategic capability in digital trades", "Create research and innovation partnerships with technology and green-energy leaders"], "medium_term": ["Establish specialised centres in emerging trades and green-tech integration", "Develop thought leadership in skilled trades innovation", "Create international visibility for Western Cape trade sector innovation"], "rationale": "You're a leader. Maintain that by staying ahead in emerging technologies and green integration. Position skilled trades as future-ready and innovation-led."}}}};

const state = {
  scenario: '1',
  skillSector: 'ICT',
  sector: null,
  readiness: null,
  exposure: null,
  step: 'sector'
};

const sectors = ['ICT', 'BPO', 'Manufacturing', 'Tourism', 'Trades'];
const scenarioIds = ['1', '2', '3', '4'];
const readinessOptions = [
  { value: 'low', label: 'Low', desc: 'Weak digital base, significant gaps' },
  { value: 'moderate', label: 'Moderate', desc: 'Some capability, uneven readiness' },
  { value: 'high', label: 'High', desc: 'Strong foundation, clear gaps' },
];
const exposureOptions = [
  { value: 'medium', label: 'Medium', desc: 'Gradual change, manageable pace' },
  { value: 'high', label: 'High', desc: 'Rapid change, urgent pressure' },
];

function routeName() {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path.endsWith('/scenarios')) return 'scenarios';
  if (path.endsWith('/interventions')) return 'interventions';
  if (path.endsWith('/skills')) return 'skills';
  return 'home';
}

function setActiveNav() {
  const route = routeName();
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-nav') === route);
  });
}

function el(id) { return document.getElementById(id); }
function list(items, cls = 'list') {
  return `<ul class="${cls}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderHome() {
  el('app').innerHTML = `
    <section class="section hero">
      <div class="container">
        <div class="eyebrow">Western Cape foresight tool</div>
        <h1>Digital Skills Planning for the Western Cape</h1>
        <p class="lede">Interactive tools to explore future scenarios, design interventions, and map skills pathways. Based on Phase 3 of the SkillsBoost Refresh foresight analysis.</p>
        <div class="grid grid-3">
          <article class="card-blue">
            <div class="card-kicker kicker-blue">Scenarios</div>
            <h3>Explore four futures</h3>
            <p class="small">Understand sector impacts across plausible AI and readiness conditions.</p>
            <p style="margin-top:1rem"><a class="btn secondary" href="/scenarios/">Open scenarios →</a></p>
          </article>
          <article class="card-red">
            <div class="card-kicker kicker-red">Interventions</div>
            <h3>Find the right pathway</h3>
            <p class="small">Match sector, readiness and exposure to a targeted intervention roadmap.</p>
            <p style="margin-top:1rem"><a class="btn red" href="/interventions/">Open finder →</a></p>
          </article>
          <article class="card-blue">
            <div class="card-kicker kicker-navy">Skills and pathways</div>
            <h3>Map progression</h3>
            <p class="small">Identify emerging skills, pressured roles and progression pathways by sector.</p>
            <p style="margin-top:1rem"><a class="btn secondary" href="/skills/">Open skills →</a></p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <h2>How to use</h2>
        <div class="grid">
          <article class="card">
            <div class="badge">1. Explore scenarios</div>
            <p>Understand Supercharged Cape, The displacement trap, Co-Pilot Province, and Stalled and stratified. See how sector outcomes differ by AI adoption speed and readiness.</p>
          </article>
          <article class="card">
            <div class="badge red">2. Design interventions</div>
            <p>Answer three questions about your sector, current readiness and AI exposure. Get immediate and medium-term actions aligned to your conditions.</p>
          </article>
          <article class="card">
            <div class="badge">3. Map skills pathways</div>
            <p>Compare emerging skills, declining or pressured roles, and career progression requirements from entry level to advanced capability.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" style="background:#eff6ff;border-top:1px solid var(--soft-border);border-bottom:1px solid var(--soft-border)">
      <div class="container">
        <h2>Key insights from Phase 3</h2>
        <div class="grid grid-2">
          <article class="card"><h3>Capability conversion, not only adoption</h3><p>The challenge is whether firms, workers and training providers can turn digital infrastructure, AI tools, data systems and green-transition investment into usable workplace capability.</p></article>
          <article class="card"><h3>Readiness varies by sector</h3><p>ICT and BPO/GBS are positioned for near-term acceleration. Manufacturing faces conditional transition, while tourism and technical trades face exposure with weaker readiness.</p></article>
          <article class="card"><h3>No-regret investments exist</h3><p>Foundational digital readiness, AI literacy, progression pathways, employer-integrated training, cybersecurity, human-AI collaboration and supervisory capability remain valuable across scenarios.</p></article>
          <article class="card"><h3>Human-centred skills remain critical</h3><p>Emotional intelligence, customer engagement, creativity, empathy and trust-building become more valuable as routine work becomes more automated.</p></article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container narrow">
        <div class="card" style="text-align:center;background:linear-gradient(135deg,#ffffff,#eff6ff);">
          <div class="eyebrow">Start exploring</div>
          <h2>Move from scenario awareness to action</h2>
          <p style="margin-bottom:1.5rem">Use the scenario explorer first, then translate the findings into interventions and skills pathways.</p>
          <div class="cta-row" style="justify-content:center"><a class="btn" href="/scenarios/">Start with scenarios</a><a class="btn secondary" href="/interventions/">Find interventions</a></div>
        </div>
      </div>
    </section>
  `;
}

function renderScenarios() {
  const scenario = DATA.scenarios[state.scenario];
  el('app').innerHTML = `
    <section class="section-tight">
      <div class="container narrow">
        <h1>Scenario Exploration</h1>
        <p class="lede">Choose a scenario to see how the Western Cape digital skills landscape evolves.</p>
        <div class="grid grid-2" style="margin-bottom:2rem">
          ${scenarioIds.map(id => {
            const s = DATA.scenarios[id];
            const active = state.scenario === id;
            return `<button class="choice ${active ? 'active' : ''}" data-scenario="${id}"><span style="color:${s.color}">${s.name}</span><span class="small">${s.description}</span></button>`;
          }).join('')}
        </div>
        <article class="scenario-panel" style="border-color:${scenario.color}">
          <h2 style="color:${scenario.color}">${scenario.name}</h2>
          <div class="grid" style="margin-bottom:1.5rem">
            <div><div class="meta-label">Dominant dynamic</div><p>${scenario.dynamic}</p></div>
          </div>
          <div class="grid grid-2" style="margin-bottom:1.5rem">
            <div><div class="meta-label">Employment trajectory</div><p>${scenario.employment}</p></div>
            <div><div class="meta-label">Key risk</div><p>${scenario.risk}</p></div>
          </div>
          <div style="border-top:1px solid rgba(15,23,42,0.12);padding-top:1.5rem">
            <div class="meta-label">Sector impacts</div>
            <div class="grid grid-2">
              ${Object.entries(scenario.sectors).map(([sector, impact]) => `<div><h3 style="color:${scenario.color};font-size:.95rem">${sector}</h3><p class="small">${impact}</p></div>`).join('')}
            </div>
          </div>
        </article>
        <article class="card" style="margin-top:1.5rem">
          <h2>What to monitor</h2>
          ${list(scenario.signposts)}
        </article>
      </div>
    </section>
  `;
  document.querySelectorAll('[data-scenario]').forEach(btn => btn.addEventListener('click', () => {
    state.scenario = btn.dataset.scenario;
    renderScenarios();
  }));
}

function renderSkills() {
  const data = DATA.skills[state.skillSector];
  el('app').innerHTML = `
    <section class="section-tight">
      <div class="container narrow">
        <h1>Skills & Pathways Explorer</h1>
        <p class="lede">Explore emerging skills, declining or pressured roles, and progression pathways by sector.</p>
        <div class="grid grid-5" style="margin-bottom:2rem">
          ${sectors.map(sector => `<button class="tab ${state.skillSector === sector ? 'active' : ''}" data-skill-sector="${sector}">${sector}</button>`).join('')}
        </div>
        <div class="grid grid-2" style="margin-bottom:2rem">
          <article class="card-blue">
            <h2>Emerging skills</h2>
            ${list(data.emerging)}
          </article>
          <article class="card-red">
            <h2>Declining or pressured</h2>
            ${list(data.declining, 'list red')}
          </article>
        </div>
        <section style="margin-bottom:2rem">
          <h2>Progression pathways</h2>
          <div class="grid">
            ${data.pathways.map(pathway => `
              <article class="card pathway">
                <h3>${pathway.level}</h3>
                <div class="meta-label">Typical roles</div>
                <p style="margin-bottom:1rem">${pathway.roles}</p>
                <div class="meta-label">Key skills to develop</div>
                <p>${pathway.skills}</p>
              </article>
            `).join('')}
          </div>
        </section>
        <article class="panel">
          <h2>No-regret investments</h2>
          <p style="margin-bottom:1rem">These capabilities remain valuable across all scenarios. Prioritise these first.</p>
          ${list([
            'Foundational digital work readiness',
            'AI literacy and understanding AI outputs',
            'Human-AI collaboration and judgement',
            'Adaptive learning and continuous upskilling',
            'Supervisory and team leadership capability',
            'Problem-solving, critical thinking, communication',
          ])}
        </article>
      </div>
    </section>
  `;
  document.querySelectorAll('[data-skill-sector]').forEach(btn => btn.addEventListener('click', () => {
    state.skillSector = btn.dataset.skillSector;
    renderSkills();
  }));
}

function renderInterventions() {
  let content = '';
  if (state.step === 'sector') {
    content = `
      <h2>Which sector?</h2>
      <p class="step-note">Select the sector you are planning for.</p>
      <div class="grid grid-2">${sectors.map(s => `<button class="choice" data-sector="${s}">${s}</button>`).join('')}</div>
    `;
  }
  if (state.step === 'readiness') {
    content = `
      <h2>Current readiness in ${state.sector}?</h2>
      <p class="step-note">Choose the current digital capability base.</p>
      <div class="grid grid-3" style="margin-bottom:1.25rem">${readinessOptions.map(r => `<button class="choice" data-readiness="${r.value}"><span>${r.label}</span><span class="small">${r.desc}</span></button>`).join('')}</div>
      <button class="btn secondary" data-back="sector">Back</button>
    `;
  }
  if (state.step === 'exposure') {
    content = `
      <h2>AI exposure level?</h2>
      <p class="step-note">Choose the likely pace and pressure of AI change.</p>
      <div class="grid grid-2" style="margin-bottom:1.25rem">${exposureOptions.map(o => `<button class="choice red-active" data-exposure="${o.value}"><span>${o.label}</span><span class="small">${o.desc}</span></button>`).join('')}</div>
      <button class="btn secondary" data-back="readiness">Back</button>
    `;
  }
  if (state.step === 'result') {
    const key = `${state.readiness}_${state.exposure}`;
    const rec = DATA.interventions[state.sector][key];
    content = `
      <div class="badge red">${state.sector} | ${state.readiness} readiness | ${state.exposure} exposure</div>
      <h2>${rec.focus}</h2>
      <p style="margin-bottom:1.5rem"><strong style="color:var(--blue-950)">Main blocker:</strong> ${rec.blocker}</p>
      <div class="grid grid-2" style="margin-bottom:1.5rem">
        <article class="result-box">
          <div class="meta-label">Next 6 months</div>
          ${list(rec.immediate)}
        </article>
        <article class="result-box">
          <div class="meta-label">6 to 18 months</div>
          ${list(rec.medium_term, 'list red')}
        </article>
      </div>
      <div class="result-box" style="margin-bottom:1.5rem"><p><strong style="color:var(--blue-950)">Rationale:</strong> ${rec.rationale}</p></div>
      <button class="btn secondary" data-reset="true">Start over</button>
    `;
  }
  el('app').innerHTML = `
    <section class="section-tight">
      <div class="container narrow">
        <h1>Intervention Pathway Finder</h1>
        <p class="lede">Answer three questions to find your sector-specific intervention roadmap.</p>
        <article class="panel">${content}</article>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-sector]').forEach(btn => btn.addEventListener('click', () => {
    state.sector = btn.dataset.sector;
    state.step = 'readiness';
    renderInterventions();
  }));
  document.querySelectorAll('[data-readiness]').forEach(btn => btn.addEventListener('click', () => {
    state.readiness = btn.dataset.readiness;
    state.step = 'exposure';
    renderInterventions();
  }));
  document.querySelectorAll('[data-exposure]').forEach(btn => btn.addEventListener('click', () => {
    state.exposure = btn.dataset.exposure;
    state.step = 'result';
    renderInterventions();
  }));
  document.querySelectorAll('[data-back]').forEach(btn => btn.addEventListener('click', () => {
    state.step = btn.dataset.back;
    renderInterventions();
  }));
  document.querySelectorAll('[data-reset]').forEach(btn => btn.addEventListener('click', () => {
    state.sector = null; state.readiness = null; state.exposure = null; state.step = 'sector';
    renderInterventions();
  }));
}

function boot() {
  setActiveNav();
  const route = routeName();
  if (route === 'scenarios') renderScenarios();
  else if (route === 'interventions') renderInterventions();
  else if (route === 'skills') renderSkills();
  else renderHome();
}

boot();
