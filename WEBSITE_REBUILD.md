# Mero Website Rebuild Reference

> Reference document for the v2 pivot from USDM to commodity warehouse receipt tokenisation (MEROG).
> Use this alongside the codebase to track what changed, why, and what the design intent is.

---

## The Core Pivot

| Before | After |
|---|---|
| USDM — commodity-backed USD stablecoin | MEROG/MEROC/MERON — warehouse receipt tokens |
| Canton Network | Sui Network |
| ADGM FSRA regulatory path | IFSCA Regulatory Sandbox at GIFT IFSC |
| "Mint USDM against commodity collateral" | "Tokenise commodity → warehouse receipt → borrow USDC OR earn yield" |
| 126% collateralisation as the headline stat | 60% LTV, 48h cure, 1 MEROG = 1 fine troy oz |
| Single yield story | Four integrated modules |
| Emerald/teal accent (#066253 / #00c2a8) | Warm gold accent (#C9A84C / #E8C96E) |

---

## Design System Changes

### Color
- **Primary accent**: `#C9A84C` (warm gold) — replaces `#066253` (emerald)
- **Accent bright**: `#E8C96E` (lighter gold) — replaces `#00c2a8` (teal)
- **On dark backgrounds**: use `#E8C96E` for readability
- **On light backgrounds**: use `#C9A84C`
- **Navy backgrounds** (`#0a1628`, `#0b1c2d`) — unchanged
- **Hero gradient**: navy → gold (was navy → emerald)

### Typography
- **Display font**: `Cormorant Garamond` (serif, weights 300–700) — for h1 and major section titles
- **Body/UI font**: `Sora` — unchanged, all other text
- Use `font-display` Tailwind class for serif headings
- **Tone**: The serif creates a private-bank / bullion certificate feel, contrasting the geometric Sora for data/labels

### Visual motif
- MEROG coin SVG in hero replaces the USDM animated letters
- Octagonal frame (coin shape), fine radial tick marks, gold gradient fill
- `Au 79` and `1 FINE TROY OZ GOLD` inscription — real numismatic feel
- Orbiting ring text: `SUI NETWORK · GIFT IFSC · WAREHOUSE RECEIPT TOKEN · PHASE I · LBMA VAULTED`

---

## Section Map: Old → New

### Hero (`Header.tsx`)
**Removed:** USDM U/S/D/M letter animation, orbiting "126% Collateralisation / 5-15% APY / Canton Network" ring
**New hero visual:** MEROG token coin SVG (octagonal, gold, fine details)
**New headline:** "Physical gold. On-chain ownership. Institutional yield."
**New badge:** "Phase 1 — Gold — GIFT IFSC Regulatory Sandbox"
**New module pills:** [Tokenise] [Lend] [Yield] — each shows a one-line description when active
**CTA:** "Explore Platform" + "View ecosystem →"

---

### Client Channels (`ClientChannels.tsx`)
Kept three-channel structure. Updated all content:

| Channel | Old | New |
|---|---|---|
| 01 | Genesis Fund — USDM yield + commodity appreciation | Mero Fund — warehouse receipt exposure, SpiderRock overlay via Jersey Private Fund |
| 02 | Banks — USDM white-label, 5-6%/8-14% spread | Banks — white-label SaaS for Indian banks at GIFT IFSC, full module suite |
| 03 | Mining Corporates — idle stockpile yield via USDM | Commodity Holders — tokenise, borrow USDC or earn via SpiderRock |

**Removed:** Graphene Platforms Ltd / FCA footnote (LATAM pilot)
**Kept:** Investor eligibility gate for Channel 01 (Jersey Private Fund)

---

### Platform (`Platform.tsx`)
**Old:** 4 stat cards — 5-15% APY, 126% collateral, Canton Network, USD-denominated
**New:** 4 module cards — one per platform module, with concrete metrics

| Module | Stat | Description |
|---|---|---|
| Warehouse Receipt Tokens | 1:1 | 1 MEROG = 1 fine troy oz, on Sui Network |
| Repo-Style Lending | 60% LTV | Fixed-rate USDC lending against MEROG, 48h cure |
| Gold ETF Yield Overlay | 1.3–9% | SpiderRock/BlackRock collar or covered call on IAU |
| Asset Manager Marketplace | 5–18% | BUIDL, ACRED, BENJI, Paradox/Hilbert |

---

### Warehouse Receipt Tokens (`Layout420.tsx`)
**Old:** "Real commodities intended to back USDM"
**New:** "Warehouse receipt tokens for physical commodities"

| Token | Old label | New label |
|---|---|---|
| MEROG | Gold / Reserve Asset | MEROG — 1 Fine Troy Oz Gold |
| MEROC | Copper / Reserve Asset | MEROC — Copper Warehouse Receipt |
| MERON | Nickel / Reserve Asset | MERON — Nickel Warehouse Receipt |
| MEROD | Gemstones / Haircuts 15-30% | MEROD / MEROE — Diamonds & Emeralds |

**Key callout added to sticky left:** "1 MEROG = 1 fine troy ounce of gold. When you hold MEROG, you own that ounce."

---

### Three Pillars (`Layout356.tsx`)
**Old steps:** Mint USDM → Deploy USDM into yield → Redeem USDM
**New steps:** Tokenise → Lend / Earn (two paths) → Redeem

| Step | Old | New |
|---|---|---|
| 01 | Mint — deposit commodity, mint USDM at 126% | Tokenise — vault confirmation → MEROG issued on Sui |
| 02 | Deploy — USDM → BUIDL/BENJI/ACRED | Lend / Earn — either borrow USDC at 60% LTV, or Gold ETF overlay |
| 03 | Redeem — 24-48h settlement, lock-ups | Redeem — return MEROG → encumbrance released, commodity unencumbered |

---

### Lending Protocol (`InKindModel.tsx`)
**Repurposed from:** "The in-kind contribution model" (USDM-specific)
**New purpose:** "Institutional margin mechanics" — DeFi vs Mero comparison

| Dimension | DeFi Protocols | Mero Lending |
|---|---|---|
| Liquidation | Instant, algorithmic | 48-hour cure window |
| Rate | Variable/floating | Fixed at origination |
| Term | No fixed term | 30 / 60 / 90 / 180 days |
| Collateral | Crypto assets | Physical warehouse receipt tokens |
| Matching | Algorithmic | Auction / RFQ panel |
| Settlement | Permissionless | Permissioned, KYC/AML gated |

**Key stat added:** "48-hour margin cure window. No flash liquidation."
**Example:** "$10M MEROG collateral → $6M USDC at 5% fixed, 90-day term"

---

### Gold ETF Yield Overlay (`GoldETFOverlay.tsx`) — NEW SECTION
**Added between:** InKindModel and ProcessSection in HomePage
**Content:** SpiderRock Advisors (BlackRock subsidiary) manages collar or covered call on IAU position

Two strategies:

| | Collar | Covered Call |
|---|---|---|
| Net yield | 1.3–1.6% annualised | 4–9% annualised |
| Floor | ~82–88% of entry value | No structural floor |
| Tenor | 465–683 days | 130–312 days |
| Best for | Sovereign mandates, capital preservation | Income-focused institutions |

**Key points:**
- Physical gold never sold — converted in-kind to IAU via Authorised Participant
- SpiderRock = wholly-owned subsidiary of BlackRock, Inc.
- Legal title held in independent escrow (not transferred to any commercial entity)
- Zero cost of capital (in-kind contribution, no lending facility required)
- SpiderRock indicative proposals based on $50M IAU position, March 2026

**Callout:** "A $50M gold position in a covered call strategy could generate $2M–$4.5M in net annual income without converting a single ounce to cash."

---

### How Mero Works for Banks (`ProcessSection.tsx`)
**Old steps:** Onboard → Deposit collateral → Mint and deploy USDM (5-15%)
**New steps:** Integrate SaaS → Issue MEROG receipts → Deploy into lending or yield

**New key metrics:**
- 60% LTV (was 126% collateral)
- 48h Cure (was 24-48h settlement)
- 1 MEROG = 1 troy oz (was 5-15% APY)
- Sui Network (was USD)

---

### Partners (`Partners.tsx`)
**Removed:** Canton Network, Polygon logos (no longer relevant)
**New approach:** Text-based partner/ecosystem grid (no logo images needed)

Categories:
- **Infrastructure**: Sui Network, Circle (USDC)
- **Yield Products**: BlackRock (BUIDL), Apollo (ACRED), Franklin Templeton (BENJI), SpiderRock/BlackRock (Gold ETF Overlay)
- **Regulatory**: IFSCA (GIFT IFSC Regulatory Sandbox)
- **Compliance**: Chainalysis, Elliptic (on-chain AML)

---

### FAQ (`Faq7.tsx`)
All 6 questions rewritten. Old questions were all USDM-specific.

New questions:
1. What is MEROG and how does it work?
2. How does the repo-style lending protocol work?
3. What is the 48-hour cure period and why does it matter?
4. What is the Gold ETF yield overlay?
5. What is GIFT IFSC and why does Mero operate there?
6. How does the white-label bank deployment model work?

---

### Newsletter (`StayInformedSection.tsx`)
**Minor:** Removed "USDM" from description copy. Now: "Get updates on Mero's commodity tokenisation platform, GIFT IFSC developments, and institutional yield infrastructure."

---

### Footer (`Footer11.tsx`)
**Description updated:** Removed "commodity-backed USD-denominated digital asset workflows" → "commodity tokenisation infrastructure, warehouse receipt tokens for physical gold and commodities at GIFT IFSC"

**Risk disclosure updated:**
- Removed USDM references throughout
- Removed Canton Network reference → Sui Network
- Removed ADGM FSRA licensing mention
- Added IFSCA Regulatory Sandbox context
- Added Sui Network and USDC (Circle) risk factors
- Updated to reflect warehouse receipt token model (not stablecoin model)

**Important notice updated:** Removed BVI entity reference, added IFSCA sandbox context

---

## New Component: `AssetManagerMarketplace.tsx`

File created at: `src/components/AssetManagerMarketplace.tsx`

Placed in `HomePage.tsx` between `GoldETFOverlay` and `ProcessSection`.

**The core narrative:** The lending protocol is the connective tissue. Without it, the warehouse receipt is a record in a wallet. With it, a commodity holder can tokenise → borrow USDC → deploy into BUIDL/ACRED/BENJI/Paradox in a single workflow.

**Structure:**
1. Header with "Tokenise. Borrow. Deploy." headline
2. Three-step integrated flow diagram (dark background strip)
3. Five manager/product cards with yield targets
4. Two-column: bank deployment model (Configure/Allocate/Report) + callout about Mero's role as distribution layer only (not a fund manager)

**Five managers shown:**
- BUIDL (BlackRock) — ~5% net, tokenised US treasury
- ACRED (Apollo) — ~7–8% net, tokenised credit
- BENJI (Franklin Templeton) — ~5% net, tokenised money market
- Paradox/Hilbert — ~12–18% gross, delta-neutral/basis trading
- SpiderRock/BlackRock Gold ETF Overlay — 1.3–9% net

**Regulatory note displayed:** Mero is a distribution and facilitation layer, not a fund manager. Each underlying product is independently regulated. IFSCA (Fund Management) Regulations 2025 and IFSCA (Capital Market Intermediaries) Regulations 2025.

---

## New Component: `GoldETFOverlay.tsx`

File created at: `src/components/GoldETFOverlay.tsx`

Placed in `HomePage.tsx` between `InKindModel` and `ProcessSection`.

Design: Dark background (#0b1c2d), two strategy cards side by side, gold accent, SpiderRock/BlackRock attribution, actual indicative economics from March 2026 proposals.

---

## Files Modified

| File | Change Type |
|---|---|
| `src/styles/globals.css` | Color swap (emerald → gold), add Cormorant Garamond import |
| `tailwind.config.js` | Add `fontFamily.display` for Cormorant Garamond |
| `src/pages/HomePage.tsx` | Add GoldETFOverlay import, update SEO |
| `src/components/Header.tsx` | Complete rewrite |
| `src/components/Platform.tsx` | Content rewrite (4 modules) |
| `src/components/Layout420.tsx` | Content rewrite (warehouse receipt tokens) |
| `src/components/Layout356.tsx` | Content rewrite (3 new pillars) |
| `src/components/InKindModel.tsx` | Repurposed as Lending Protocol comparison |
| `src/components/GoldETFOverlay.tsx` | **NEW** — Gold ETF yield overlay section |
| `src/components/AssetManagerMarketplace.tsx` | **NEW** — Asset manager marketplace section |
| `src/components/ProcessSection.tsx` | Content rewrite (bank SaaS deployment) |
| `src/components/ClientChannels.tsx` | Content rewrite (updated 3 channels) |
| `src/components/Partners.tsx` | Redesigned as text-based ecosystem grid |
| `src/components/Faq7.tsx` | Complete rewrite (6 new questions) |
| `src/components/StayInformedSection.tsx` | Minor copy update |
| `src/components/Footer11.tsx` | Updated disclaimer, description, risk disclosure |

## Files NOT Modified

| File | Reason |
|---|---|
| `src/components/Navbar.tsx` | Nav links still valid (/#platform, /#solutions, /#partners, /#footer) |
| `src/components/Map.tsx` | Structure OK; label text could be updated to focus on India/GIFT IFSC |
| `src/components/Testimonial6.tsx` | Not rendered in HomePage — skip |
| `src/components/ReadySection.tsx` | Not rendered in HomePage — skip |
| `src/pages/HeroConceptsPage.tsx` | Internal design page — not user-facing, skip |

---

## Content Reference: Key Numbers

| Metric | Value | Context |
|---|---|---|
| MEROG parity | 1 MEROG = 1 fine troy oz gold | Warehouse receipt token |
| Loan-to-Value | 60% at origination | Repo-style lending |
| Maintenance threshold | 75% LTV | Triggers margin notice |
| Cure window | 48 hours | No flash liquidation |
| Borrow rate | 5% p.a. fixed | USDC lending rate |
| Lend rate | 4% p.a. | Rate paid to USDC lenders |
| Mero spread | 1% | Protocol revenue |
| Term structure | 30 / 60 / 90 / 180 days | Fixed at origination |
| Collar yield (net) | 1.3–1.6% annualised | SpiderRock/BlackRock |
| Covered call yield (net) | 4–9% annualised | SpiderRock/BlackRock |
| BUIDL | ~5% net | BlackRock tokenised treasury |
| ACRED | ~7–8% net | Apollo tokenised credit |
| BENJI | ~5% net | Franklin Templeton money market |
| Paradox/Hilbert | ~12–18% gross | Delta-neutral/basis strategies |

---

## Regulatory Context

- **Primary framework**: IFSCA Regulatory Sandbox at GIFT IFSC
- **Bullion framework**: IFSCA (Bullion Exchange and Bullion Depository) Regulations, 2025
- **Lending framework**: IFSCA (Finance Company) Regulations, 2021
- **Fund framework**: IFSCA (Fund Management) Regulations, 2025 (for yield products)
- **Non-bank channel**: Jersey Private Fund — Jersey Financial Services Commission regulated DSP
- **AML/KYC**: Bank channel → bank's own framework + Chainalysis/Elliptic on-chain; Non-bank → Jersey DSP
- **Settlement network**: Sui Network (institutional-grade permissioned distributed ledger)
- **Settlement currency**: USDC (Circle) — not issued by Mero

---

## Token Types (Phase 1)

| Token | Commodity | Phase 1 priority |
|---|---|---|
| MEROG | Gold | ✅ Primary |
| MEROC | Copper | Phase 1 |
| MERON | Nickel | Phase 1 |
| MEROD | Diamonds | Phase 1 (with 15-30% haircuts) |
| MEROE | Emeralds | Phase 1 (with haircuts) |
