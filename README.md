# Western Cape Scenarios Explorer

Interactive scenario mapping and skills planning tool for Western Cape digital economy foresight. Built on Phase 3 of the SkillsBoost Refresh analysis.

## Features

- **Scenario Exploration**: Navigate four plausible futures (Supercharged Cape, The Displacement Trap, Co-Pilot Province, Stalled and Stratified) and understand sector-specific impacts
- **Intervention Finder**: Answer three questions (sector, readiness, exposure) to get a tailored 18-month intervention roadmap
- **Skills & Pathways**: Explore emerging/declining skills and career progression pathways across all sectors
- **Decision Signposts**: Understand what to monitor to track which scenario is materializing

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wc-scenarios-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit: WC Scenarios Explorer"
git push origin main
```

2. Import project in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your `wc-scenarios-app` repository
   - Click "Import"
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"

### Option 2: Direct Vercel Deployment

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel
```

### Custom Domain

After deployment, add a custom domain in Vercel project settings:
- Go to project Settings > Domains
- Add your custom domain
- Follow DNS instructions

## Project Structure

```
wc-scenarios-app/
├── app/
│   ├── layout.tsx          # Main layout with navigation
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── scenarios/
│   │   └── page.tsx        # Scenario explorer
│   ├── interventions/
│   │   └── page.tsx        # Decision tree for interventions
│   └── skills/
│       └── page.tsx        # Skills and pathways explorer
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json
├── .gitignore
└── README.md
```

## Key Data Sources

All content is based on:
- Phase 3 Foresight Report, SkillsBoost Refresh
- Client: WC Government, Department of Economic Development and Tourism (DEDAT)
- Service Provider: University of Pretoria, Enterprises UP
- Sectors: ICT, BPO/GBS, Tourism & Hospitality, Manufacturing, Technical Trades

## Sectors Covered

1. **ICT** (Forecast Score: 79/100 - Near-term acceleration)
2. **BPO / GBS** (Forecast Score: 72/100 - Near-term acceleration)
3. **Manufacturing** (Forecast Score: 54/100 - Conditional transition)
4. **Tourism & Hospitality** (Forecast Score: 46/100 - Exposure without readiness)
5. **Technical Trades** (Forecast Score: 40/100 - Exposure without readiness)

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS (inline styles + globals.css)
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

## Features

### Scenario Mapper
- Explore four distinct futures
- Understand employment trajectory, key risks, and sector impacts
- Monitor decision signposts to track which scenario materializes

### Decision Tree
- Answer sector, readiness, and exposure questions
- Get tailored intervention roadmap with immediate (0-6 months) and medium-term (6-18 months) actions
- Understand the rationale behind recommendations

### Skills Explorer
- See emerging vs declining skill clusters
- Explore progression pathways from entry to advanced levels
- Identify no-regret investments that matter across all scenarios

## Scenarios Explained

### Scenario 1: Supercharged Cape
**Exponential AI + Widespread Readiness**
- Growth in advanced roles; contraction in routine support
- Key risk: Brain drain to global opportunities
- Best for: Sustained investment in specialist and governance capability

### Scenario 2: The Displacement Trap
**Exponential AI + Limited Readiness**
- Talent siege with extreme polarisation
- Key risk: Entry-level employment contraction; smaller firms cannot compete
- Best for: Urgent workforce transition infrastructure

### Scenario 3: Co-Pilot Province
**Incremental AI + Widespread Readiness**
- Stable-to-growing employment; hybrid roles expand
- Key risk: Complacency about ongoing change
- Best for: Sustainable growth and progression pathways

### Scenario 4: Stalled and Stratified
**Incremental AI + Limited Readiness**
- Flat employment; dual economy persists
- Key risk: Slow competitive erosion relative to other jurisdictions
- Best for: Proactive intervention to break analogue persistence

## No-Regret Investments

Capabilities valuable across ALL scenarios:
- Foundational digital work readiness
- AI literacy and responsible AI understanding
- Human-AI collaboration and judgment
- Adaptive learning and continuous upskilling
- Supervisory and team leadership capability
- Problem-solving, critical thinking, communication

## Monitoring & Adaptation

Use the decision signposts to track which scenario is materializing:
- BPO employment trends and automation rates
- TVET programme relevance and absorption
- SMME digital adoption in tourism
- Manufacturing subsector production divergence

## Contact & Attribution

**Data Source**: Phase 3 Foresight Report, SkillsBoost Refresh
**Client**: WC Government, DEDAT
**Service Provider**: University of Pretoria, Enterprises UP
**Interactive Tool**: Built for design thinking workshops and strategic planning

## License

Content based on public foresight research for Western Cape economic development.

## Support

For questions or issues:
- Check the tool documentation
- Review the Phase 3 Foresight Report
- Contact DEDAT for data questions

## Future Enhancements

- User authentication and custom scenario saving
- Data export functionality
- Integrated monitoring dashboard
- Employer and training provider feedback loops
- Real-time labour market data integration

## Vercel deployment notes

This version pins Node to 20.x and tells Vercel to use pnpm for dependency installation. This avoids the npm CLI failure: `npm error Exit handler never called!`.

If Vercel still shows `npm install`, check Project Settings → Build and Development Settings and clear any install command override, or set the install command to:

```bash
pnpm install --no-frozen-lockfile
```

Build command:

```bash
pnpm run build
```
