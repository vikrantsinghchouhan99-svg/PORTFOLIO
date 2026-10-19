import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const src = 'public/assets/profile.jpg';
const { width, height } = await sharp(src).metadata();

// We want a high quality portrait where Vikrant is centered and the bottom fades out smoothly
// Create an SVG gradient overlay for bottom fade out
const fadeSvg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="65%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="95%" stop-color="#07070a" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#fade)"/>
</svg>`;

const fadeBuf = await sharp(Buffer.from(fadeSvg)).png().toBuffer();

const compositePhoto = await sharp(src)
  .composite([{ input: fadeBuf, blend: 'over' }])
  .png()
  .toBuffer();

for (const w of [1100, 720, 420]) {
  await sharp(compositePhoto)
    .resize({ width: w })
    .webp({ quality: 92 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630)
const thumb = await sharp(compositePhoto).resize({ height: 580 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="45%" r="48%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: thumb, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">VIKRANT</text>
        <text x="78" y="325" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
        <text x="78" y="380" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="17" fill="#a7a6ad" letter-spacing="4">FULL STACK JAVA DEVELOPER • SPRING BOOT</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images generated successfully!');
