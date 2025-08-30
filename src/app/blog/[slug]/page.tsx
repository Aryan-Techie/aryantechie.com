import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import {
  Meta,
  Schema,
  Column,
  Heading,
  HeadingNav,
  Icon,
  Row,
  Text,
  SmartLink,
  Avatar,
  Media,
  Line,
  Grid,
} from "@once-ui-system/core";
import { baseURL, about, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from "next";
import React from "react";
import { Posts } from "@/components/blog/Posts";
import Post from "@/components/blog/Post";
import { ShareSection } from "@/components/blog/ShareSection";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "blog", "posts"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function Blog({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "blog", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  // Get all posts except current one
  const allPosts = getPosts(["src", "app", "blog", "posts"]);
  const otherPosts = allPosts.filter(p => p.slug !== post.slug);
  
  // Recent posts (excluding current)
  const recentPosts = otherPosts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 2);
    
  // Random posts (excluding current and recent)
  const availableForRandom = otherPosts.filter(p => 
    !recentPosts.some(recent => recent.slug === p.slug)
  );
  const randomPosts = availableForRandom
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="24">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">Blog</Text>
            </SmartLink>
            {/* Add reading time next to the date */}
            <Row gap="8" vertical="center">
              <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
                {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
              </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">•</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </Text>
            </Row>
            <Heading variant="display-strong-m">{post.metadata.title}</Heading>
          </Column>
          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
            </Row>
          </Row>
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              sizes="(min-width: 768px) 100vw, 768px"
              border="neutral-alpha-weak"
              radius="l"
              marginTop="12"
              marginBottom="8"
            />
          )}
          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>

          <ShareSection 
            title={post.metadata.title} 
            url={`${baseURL}${blog.path}/${post.slug}`} 
          />

          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Text variant="heading-strong-xl" as="div" marginBottom="24">
              You might also like
            </Text>
            <Grid columns="2" mobileColumns="1" fillWidth gap="12">
              {randomPosts.map((randomPost) => (
                <Post
                  key={randomPost.slug}
                  post={randomPost}
                  thumbnail
                  direction="column"
                  hideFromNav={true}
                />
              ))}
            </Grid>
            
            <Line maxWidth="40" />
            <Text variant="heading-strong-xl" as="div" marginBottom="24">
              Recent posts
            </Text>
            <Grid columns="2" mobileColumns="1" fillWidth gap="12">
              {recentPosts.map((recentPost) => (
                <Post
                  key={recentPost.slug}
                  post={recentPost}
                  thumbnail
                  direction="column"
                  hideFromNav={true}
                />
              ))}
            </Grid>
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column
        maxWidth={12}
        paddingLeft="40"
        fitHeight
        position="sticky"
        top="80"
        gap="16"
        hide="m"
      >
        <Row
          gap="12"
          paddingLeft="2"
          vertical="center"
          onBackground="neutral-medium"
          textVariant="label-default-s"
        >
          <Icon name="document" size="xs" />
          On this page
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
