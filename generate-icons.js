// Génère les icônes PWA (192 et 512) en PNG via sharp
// Usage : node generate-icons.js
const fs = require('fs');
const sharp = require('sharp');

function svg(size) {
  const r = Math.round(size * 0.18);
  const fs1 = Math.round(size * 0.5);
  const fs2 = Math.round(size * 0.085);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1E3A5F"/>
        <stop offset="100%" style="stop-color:#0F2540"/>
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" rx="${r}" fill="url(#g)"/>
    <text x="50%" y="${Math.round(size * 0.46)}" text-anchor="middle" dominant-baseline="central"
          font-family="system-ui,-apple-system,sans-serif"
          font-size="${fs1}" fill="#FFFFFF" font-weight="700" letter-spacing="-0.04em">C</text>
    <text x="50%" y="${Math.round(size * 0.78)}" text-anchor="middle"
          font-family="system-ui,sans-serif"
          font-size="${fs2}" fill="#C9A45A" font-weight="700" letter-spacing="0.18em">CAISSE</text>
  </svg>`;
}

Promise.all([
  sharp(Buffer.from(svg(192))).png().toFile('./icons/icon-192.png'),
  sharp(Buffer.from(svg(512))).png().toFile('./icons/icon-512.png')
]).then(() => console.log('✓ Icônes générées : icons/icon-192.png + icons/icon-512.png'));
