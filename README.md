# Neon Nexus UI

An open-source React component library for cyberpunk and sci-fi themed applications. Features glowing effects, glitch animations, and highly customizable components built with TypeScript and Framer Motion.

> ⬡ Built by [Xeran](https://github.com/ilhamfachrudin)

## Features
- 🌐 Cyberpunk aesthetic out of the box
- ⚡ Smooth animations powered by Framer Motion
- 🎨 CSS variable theming system
- ♿ Accessible via Radix UI primitives
- 🔷 Fully typed with TypeScript
- 📖 Documented with Storybook

## Components
| Component | Description |
|-----------|-------------|
| `<NeonButton>` | Glowing button with hover scan-line effect |
| `<NeonCard>` | Glass-panel card with border glow |
| `<NeonBadge>` | Status badge with pulsing neon dot |
| `<GlitchText>` | Text with configurable RGB-split glitch animation |
| `<ScanLine>` | Decorative CRT scan-line overlay |
| `<Terminal>` | Styled terminal/code block component |

## Installation
```bash
npm install neon-nexus-ui
# or
pnpm add neon-nexus-ui
```

## Quick Start
```tsx
import { NeonButton, NeonCard, GlitchText } from 'neon-nexus-ui';
import 'neon-nexus-ui/dist/styles.css';

export default function App() {
  return (
    <NeonCard>
      <GlitchText text="SYSTEM ONLINE" />
      <NeonButton variant="cyan" onClick={() => console.log('clicked')}>
        Access Terminal
      </NeonButton>
    </NeonCard>
  );
}
```

## Live Demo
Open `demo/index.html` in a browser for a zero-build interactive showcase.

## Development
```bash
pnpm install
pnpm dev        # Storybook dev server
pnpm build      # Build library
pnpm storybook  # Launch Storybook
```

## Tech Stack
- TypeScript
- React 18
- Framer Motion
- Radix UI
- Storybook 7
- Vite

## License
MIT © [Xeran](https://github.com/ilhamfachrudin)
