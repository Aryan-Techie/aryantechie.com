export const runtime = "nodejs";
import { getPosts } from '@/utils/utils';
import { baseURL, blog, person } from '@/resources';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Log resolved path for debugging
    const path = require('path');
    const fs = require('fs');
    const blogPath = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
    const workPath = path.join(process.cwd(), 'src', 'app', 'work', 'projects');
    const blogExists = fs.existsSync(blogPath);
    const workExists = fs.existsSync(workPath);
    console.log('RSS API: blog path:', blogPath, 'exists:', blogExists);
    console.log('RSS API: work path:', workPath, 'exists:', workExists);

    const blogPosts = getPosts(['src', 'app', 'blog', 'posts']).map(post => ({
      ...post,
      _rssType: 'blog',
      _rssLink: `${baseURL}/blog/${post.slug}`
    }));
    const workPosts = getPosts(['src', 'app', 'work', 'projects']).map(post => ({
      ...post,
      _rssType: 'work',
      _rssLink: `${baseURL}/work/${post.slug}`
    }));
    const allPosts = [...blogPosts, ...workPosts];
    const sortedPosts = allPosts.sort((a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${blog.title}</title>
    <link>${baseURL}/blog</link>
    <description>${blog.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/api/rss" rel="self" type="application/rss+xml" />
    <managingEditor>${person.email || 'mail@aroice.in'} (${person.name})</managingEditor>
    <webMaster>${person.email || 'mail@aroice.in'} (${person.name})</webMaster>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title>${post.metadata.title}</title>
      <link>${post._rssLink}</link>
      <guid>${post._rssLink}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
      ${post.metadata.image ? `<enclosure url="${baseURL}${post.metadata.image}" type="image/jpeg" />` : ''}
      ${post.metadata.tag ? `<category>${post.metadata.tag}</category>` : ''}
      <author>${person.email || 'noreply@example.com'} (${person.name})</author>
      <category>${post._rssType}</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;
    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (err: any) {
    console.error('RSS API error:', err);
    return new NextResponse(`RSS API error: ${err?.message || err}`, { status: 500 });
  }
}
