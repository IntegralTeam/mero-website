# Mero Landing Page - Visual Improvement Plan

> Document for next agent session. Complete visual polish to achieve 10/10 landing page.

## ✅ Already Implemented

### 1. Hero Section Improvements
- **New headline**: "Physical commodities. Tokenized. Productive. Unlock value without selling."
- **New subhead**: Commodity-focused (not gold-specific)
- **Fixed description height** to prevent layout shift
- **Abstract animated core** visualization with 3 rotating rings

### 2. Process Section
- **Unified flow**: Deposit → Tokenize → Activate
- **Simplified descriptions**: Removed bank-specific language
- **Better headline**: "Three steps to liquidity"

### 3. FAQ Section
- **Converted to bullet points** for all 6 questions
- Much more scannable and readable

### 4. Map Section
- **Better context**: "Starting in India. Built for global scale."
- Clear explanation of why the map exists

### 5. Platform Section
- **Custom icons replaced with Material Icons** (user preference)
- **Scroll animations** implemented
- **Card hover effects** (lift, shadow, color transitions)
- **Connection lines** between workflow steps
- **Step indicators** (01, 02, 03, 04)

---

## 🔧 Still Need to Implement

### 1. Counter Animations (HIGH PRIORITY)
**Location**: ProcessSection.tsx
**What to add**:
- Animate stats counting up: 60%, 48h, 1:1, Sui
- Use `useCounterAnimation` hook from `src/hooks/useScrollAnimation.ts`
- Trigger when section scrolls into view
- Duration: 1.5s with ease-out

**Code example**:
```tsx
const { ref: counterRef, count: ltvCount } = useCounterAnimation(60, 1500);
// Then display {ltvCount}% instead of static "60%"
```

### 2. LTV Progress Visualization (HIGH PRIORITY)
**Location**: ProcessSection.tsx metrics area
**What to add**:
- Circular progress indicator for 60% LTV
- Show threshold marker at 75%
- Animated fill when scrolled into view
- Color gradient: emerald → amber near threshold

**Design**:
- Simple SVG gauge/chart
- Background track: light gray
- Fill: emerald gradient
- Needle pointing to 60%
- Marker line at 75%

### 3. Scroll Animations - Complete Coverage (MEDIUM PRIORITY)
**Apply to all sections**:
- ClientChannels.tsx
- GoldETFOverlay.tsx  
- Layout356.tsx (Three Pillars)
- Layout420.tsx (Warehouse Receipts)
- AssetManagerMarketplace.tsx
- Partners.tsx
- Faq7.tsx
- Footer11.tsx

**Pattern to use**:
```tsx
const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

// Then add classes:
className={`... ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
```

### 4. Process Section Timeline Visual (MEDIUM PRIORITY)
**Enhance existing steps**:
- Add vertical timeline connector between steps
- Circular step numbers with animated checkmarks
- Progress indicator showing completed/active/pending states
- Hover effects on each step row

**Design**:
```
[01] ———— [02] ———— [03]
  ↓         ↓         ↓
Step 1    Step 2    Step 3
```

### 5. Gold ETF Yield Visual (MEDIUM PRIORITY)
**Location**: GoldETFOverlay.tsx
**What to add**:
- Simple bar chart comparing Collar vs Covered Call yields
- Visual representation: 1.3-1.6% vs 4-9%
- Animated bars when scrolled into view
- Color coding: conservative (emerald) vs aggressive (gold)

**Alternative**: 
- Range slider visualization showing yield spread
- "You are here" indicator

### 6. FAQ Accordion Improvements (MEDIUM PRIORITY)
**Enhance existing FAQ**:
- Smooth spring physics animation
- Plus icon morphs to X with rotation
- Active question has left border indicator
- Answer text fades in smoothly

**CSS to add to globals.css**:
```css
.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-answer.open {
  grid-template-rows: 1fr;
}
```

### 7. Card Hover Effects - Consistency (MEDIUM PRIORITY)
**Apply to all card components**:
- ClientChannels channel cards
- GoldETFOverlay strategy cards
- Partners partner cards
- Platform feature cards (already done)

**Standard hover effect**:
```css
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 194, 168, 0.1);
}
```

### 8. Mobile Optimizations (MEDIUM PRIORITY)
**Improve responsive design**:
- ProcessSection: Stack timeline vertically with connecting line
- Platform cards: Horizontal scroll on mobile with snap points
- FAQ: Full-width accordion with larger tap targets (min 44px)
- Hero: Reduce animation complexity for performance
- Map: Simplified interaction, touch-optimized regions

**Touch targets**:
```css
@media (max-width: 768px) {
  .touch-target {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### 9. Map Performance Optimization (HIGH PRIORITY)
**Issues to fix**:
- Lazy load the WorldMap component (already done with Suspense)
- Reduce animation complexity on mobile
- Optimize SVG paths if possible
- Consider static image fallback for low-end devices

**Already implemented**:
- Suspense with fallback
- Lazy import

**Still needed**:
- Reduce particle count on mobile
- Disable parallax on low-power mode
- Add `will-change` hints sparingly

### 10. Partners Section Enhancements (LOW PRIORITY)
**Visual improvements**:
- Partner cards fade in with stagger effect
- Category headers have underline draw animation on scroll
- Hover reveals additional info about partner
- Grid layout adjusts better on tablet

### 11. Button & CTA Micro-interactions (LOW PRIORITY)
**Enhance all buttons**:
- Magnetic hover effect (follows cursor slightly)
- Ripple effect on click
- Arrow animation on hover
- Focus states for accessibility

**Primary CTA**:
```css
.btn-primary {
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.3) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-primary:hover::after {
  opacity: 1;
}
```

### 12. Layout356 (Three Pillars) Scroll Animations (MEDIUM PRIORITY)
**Already has some animation**, enhance:
- Step visualizations animate in sequence
- Text content fades in with stagger
- Progress indicator showing which step is in view
- Background grid subtle parallax

---

## 📁 Files Modified (Reference)

### New Files Created:
- `src/hooks/useScrollAnimation.ts` - Scroll and counter animation hooks
- `src/styles/globals.css` - Animation CSS classes (lines 597+)

### Modified Files:
- `src/components/Header.tsx` - Hero improvements
- `src/components/Platform.tsx` - Scroll animations + hover effects
- `src/components/ProcessSection.tsx` - Text improvements
- `src/components/Faq7.tsx` - Bullet point format
- `src/components/Map.tsx` - Context improvements
- `src/components/ClientChannels.tsx` - Emerald gradient background
- `src/components/GoldETFOverlay.tsx` - Emerald gradient background
- `src/components/Testimonial6.tsx` - Emerald gradient background

### Deleted Files:
- `src/components/CustomIcons.tsx` - Not used (user prefers Material Icons)

---

## 🎨 Design System Reference

### Colors:
- **Primary Emerald**: `#00c2a8`
- **Dark Emerald**: `#066253`
- **Gold (for gold-specific)**: `#C9A84C`
- **Light Gold**: `#E8C96E`
- **Navy**: `#0b1c2d`
- **Dark Navy**: `#0a1628`

### Gradients:
- **Hero**: `linear-gradient(110deg, #0a1628 0%, #0d1f35 50%, #062e28 82%, #053d35 100%)`
- **Emerald sections**: `linear-gradient(100.1deg, #0b1c2d 9.64%, #066253 72.94%, #00c2a8 110.78%)`

### Animation Timing:
- **Subtle**: 0.3s-0.5s ease-out
- **Scroll reveal**: 0.6s-0.8s ease-out
- **Counter**: 1.5s ease-out
- **Stagger delay**: 100ms between items

### Shadows:
- **Card hover**: `0 10px 40px rgba(0, 194, 168, 0.1)`
- **Elevated**: `0 20px 60px rgba(0, 0, 0, 0.15)`

---

## ⚡ Performance Guidelines

1. **Use `transform` and `opacity`** for animations (GPU accelerated)
2. **Avoid animating**: `width`, `height`, `top`, `left`, `margin`, `padding`
3. **Use `will-change`** sparingly, only on elements about to animate
4. **Implement `prefers-reduced-motion`** for accessibility
5. **Lazy load** heavy components (WorldMap already lazy loaded)
6. **Throttle scroll events** to 60fps
7. **Use Intersection Observer** for scroll triggers (already implemented)

---

## ✅ Testing Checklist

Before considering complete:
- [ ] All sections animate smoothly on scroll
- [ ] Counter animations work in ProcessSection
- [ ] Hover effects consistent across all cards
- [ ] Mobile responsive (test iPhone SE, iPhone 14, iPad)
- [ ] FAQ accordion animates smoothly
- [ ] Map performs well on mid-tier devices
- [ ] No layout shifts during animations
- [ ] Reduced motion preference respected
- [ ] Build completes without errors
- [ ] Lighthouse performance score > 80

---

## 📝 Next Steps

1. Start with **Counter Animations** (ProcessSection) - high impact
2. Add **LTV Progress Visualization** - differentiates from competitors
3. Complete **Scroll Animation Coverage** for all remaining sections
4. Implement **FAQ Accordion** improvements
5. Optimize **Mobile Experience**
6. Fine-tune **Map Performance**
7. Polish remaining sections

---

## 🤔 Open Questions for Client

1. Should the counter animations count up every time user scrolls, or only first time?
2. For the LTV gauge - should it be animated circular progress or simpler bar chart?
3. Any specific competitors' sites they like the visual style of?
4. Priority: Smooth animations vs maximum performance on low-end devices?

---

**Last Updated**: 2026-04-01
**Status**: ~40% Complete
**Next Session Priority**: Counter animations + LTV visualization
