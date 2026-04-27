import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '../public');

mkdirSync(publicDir, { recursive: true });

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e3a5f"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle glow blob top-right -->
  <ellipse cx="950" cy="120" rx="320" ry="200" fill="#2563eb" opacity="0.08"/>

  <!-- Passport stamp large ring (decorative) -->
  <circle cx="600" cy="315" r="260" stroke="#2563eb" stroke-width="3" stroke-dasharray="12 8" opacity="0.18" fill="none"/>
  <circle cx="600" cy="315" r="274" stroke="#2563eb" stroke-width="1" stroke-dasharray="6 4" opacity="0.1" fill="none"/>

  <!-- Left pin (origin country) -->
  <circle cx="248" cy="315" r="14" fill="#2563eb" opacity="0.9"/>
  <line x1="248" y1="329" x2="248" y2="358" stroke="#2563eb" stroke-width="2.5" opacity="0.7"/>
  <circle cx="248" cy="315" r="7" fill="white"/>

  <!-- Dotted arc flight path -->
  <path d="M 262 310 Q 600 130 938 310" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="10 8" fill="none" opacity="0.5"/>

  <!-- Plane icon along arc (midpoint ~600, ~205) -->
  <g transform="translate(592, 197) rotate(-5)">
    <path d="M0 0 L16 -6 L12 0 L16 6 Z" fill="#60a5fa" opacity="0.9"/>
    <path d="M4 -1 L-4 -8 L-2 -1 Z" fill="#60a5fa" opacity="0.7"/>
    <path d="M4 1 L-4 8 L-2 1 Z" fill="#60a5fa" opacity="0.7"/>
  </g>

  <!-- Right pin (destination USA) -->
  <circle cx="952" cy="315" r="14" fill="#2563eb" opacity="0.9"/>
  <line x1="952" y1="329" x2="952" y2="358" stroke="#2563eb" stroke-width="2.5" opacity="0.7"/>
  <circle cx="952" cy="315" r="7" fill="white"/>

  <!-- Small heart at center -->
  <path d="M600 285 C600 285 588 274 580 280 C572 286 574 298 600 314 C626 298 628 286 620 280 C612 274 600 285 600 285Z" fill="#2563eb" opacity="0.5"/>

  <!-- Main: LDR -->
  <text
    x="600" y="388"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="148"
    fill="white"
    text-anchor="middle"
    letter-spacing="-4"
    opacity="0.97"
  >LDR</text>

  <!-- VISA label (stamp style) -->
  <rect x="490" y="405" width="220" height="46" rx="4" fill="none" stroke="#2563eb" stroke-width="2.5" opacity="0.8"/>
  <text
    x="600" y="436"
    font-family="Arial, sans-serif"
    font-weight="800"
    font-size="22"
    fill="#60a5fa"
    text-anchor="middle"
    letter-spacing="12"
  >VISA</text>

  <!-- Tagline -->
  <text
    x="600" y="506"
    font-family="Arial, sans-serif"
    font-weight="400"
    font-size="24"
    fill="#94a3b8"
    text-anchor="middle"
    letter-spacing="0.5"
  >U.S. Visa Guides for International Couples</text>

  <!-- Domain -->
  <text
    x="600" y="560"
    font-family="Arial, sans-serif"
    font-weight="600"
    font-size="18"
    fill="#2563eb"
    text-anchor="middle"
    letter-spacing="1"
    opacity="0.8"
  >ldrvisa.org</text>

  <!-- Bottom border accent -->
  <rect x="0" y="618" width="1200" height="12" rx="0" fill="#2563eb" opacity="0.6"/>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .png()
  .toFile(join(publicDir, 'og-default.png'));

console.log('✓ og-default.png generated (1200×630)');
