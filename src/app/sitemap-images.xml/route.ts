import { gallery, baseURL } from '@/resources';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const images = gallery.images.map((image) => ({
    url: `${baseURL}${image.src}`,
    title: escapeXml(image.title || 'Aryan Techie Gallery Image'),
    caption: escapeXml(image.alt),
    lastmod: new Date().toISOString(),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseURL}/gallery</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    ${images
      .map(
        (image) => `
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`
      )
      .join('')}
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
