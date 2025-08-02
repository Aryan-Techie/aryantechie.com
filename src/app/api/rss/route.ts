export const runtime = "nodejs";
import { getPosts } from '@/utils/utils';
import { baseURL, blog, person } from '@/resources';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Get the actual request URL for proper self-reference
    const requestUrl = new URL(request.url);
    const selfUrl = `${requestUrl.protocol}//${requestUrl.host}/api/rss`;
    
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
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${blog.title}</title>
    <link>${baseURL}/blog</link>
    <description>${blog.description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <generator>AROICE RSS Generator</generator>
    <copyright>© ${new Date().getFullYear()} ${person.name}. All rights reserved.</copyright>
    <category>Technology/Web Development/Personal Blog</category>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseURL}/images/avatar-cropped.png</url>
      <title>${blog.title}</title>
      <link>${baseURL}/blog</link>
      <width>144</width>
      <height>144</height>
      <description>Profile image for ${person.name}</description>
    </image>
    <managingEditor>${person.email || 'aryan@aroice.in'} (${person.name})</managingEditor>
    <webMaster>${person.email || 'aryan@aroice.in'} (${person.name})</webMaster>
    ${sortedPosts
      .map(
        (post) => {
          const fullImageUrl = post.metadata.image ? 
            (post.metadata.image.startsWith('http') ? post.metadata.image : `${baseURL}${post.metadata.image}`) : 
            `${baseURL}/images/og/home-new.png`;
          
          // Properly sanitize content for XML
          const sanitizeForXML = (text: string | undefined | null): string => {
            if (!text) return '';
            return text
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#39;')
              .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ''); // Remove control characters
          };

          // Remove markdown formatting from content
          const stripMarkdown = (text: string): string => {
            if (!text) return '';
            return text
              // Remove headers (##, ###, etc.)
              .replace(/^#{1,6}\s+/gm, '')
              // Remove bold (**text** or __text__)
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .replace(/__(.*?)__/g, '$1')
              // Remove italic (*text* or _text_)
              .replace(/\*(.*?)\*/g, '$1')
              .replace(/_(.*?)_/g, '$1')
              // Remove links [text](url)
              .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
              // Remove inline code `code`
              .replace(/`([^`]+)`/g, '$1')
              // Remove code blocks ```
              .replace(/```[\s\S]*?```/g, '')
              // Remove blockquotes
              .replace(/^>\s+/gm, '')
              // Remove list markers
              .replace(/^[-*+]\s+/gm, '')
              .replace(/^\d+\.\s+/gm, '')
              // Remove extra whitespace
              .replace(/\n\s*\n/g, '\n')
              .trim();
          };
          
          const rawContent = post.content ? 
            post.content.replace(/^---[\s\S]*?---/, '').trim() : '';
          
          const cleanContent = rawContent ? stripMarkdown(rawContent).substring(0, 500) : '';
          const contentPreview = sanitizeForXML(cleanContent);
            
          return `
    <item>
      <title><![CDATA[${sanitizeForXML(post.metadata.title)}]]></title>
      <link>${post._rssLink}</link>
      <guid isPermaLink="true">${post._rssLink}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${sanitizeForXML(post.metadata.summary)}]]></description>
      <content:encoded><![CDATA[
        ${post.metadata.image ? `<img src="${fullImageUrl}" alt="${sanitizeForXML(post.metadata.title)}" />` : ''}
        <p><strong>Summary:</strong> ${sanitizeForXML(post.metadata.summary)}</p>
        ${contentPreview ? `<div>${contentPreview}...</div>` : ''}
        <p><a href="${post._rssLink}">Read the full article →</a></p>
      ]]></content:encoded>
      ${post.metadata.image ? `
      <enclosure url="${fullImageUrl}" type="image/jpeg" length="0"/>` : ''}
      ${post.metadata.tag && (Array.isArray(post.metadata.tag) ? post.metadata.tag.length > 0 : post.metadata.tag.trim() !== '') ? `<category domain="${baseURL}/blog/category/${Array.isArray(post.metadata.tag) ? sanitizeForXML(post.metadata.tag.join(',')).toLowerCase().replace(/\s+/g, '-') : sanitizeForXML(String(post.metadata.tag)).toLowerCase().replace(/\s+/g, '-')}">${Array.isArray(post.metadata.tag) ? sanitizeForXML(post.metadata.tag.join(', ')) : sanitizeForXML(String(post.metadata.tag))}</category>` : ''}
      <category domain="${baseURL}/${post._rssType}">${post._rssType}</category>
      <author>${person.email || 'aryan@aroice.in'} (${person.name || 'Aryan Techie'})</author>
      <source url="${selfUrl}">${sanitizeForXML(blog.title)}</source>
      ${post.metadata.team && post.metadata.team.length > 0 ? 
        post.metadata.team.map(member => `<dc:contributor><![CDATA[${sanitizeForXML(member.name)} (${sanitizeForXML(member.role)})]]></dc:contributor>`).join('\n      ') : ''}
    </item>`;
        }
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
