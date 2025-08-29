import { Column, Heading, Meta, Schema, Row, Line } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="xl">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="m" variant="display-strong-s" align="center">
        {blog.title}
      </Heading>
      {blog.subtitle && (
        <Heading marginBottom="xl" variant="heading-default-l" as="h2" onBackground="neutral-weak" align="center">
          {blog.subtitle}
        </Heading>
      )}
      <Row fillWidth horizontal="center" marginBottom="xl">
        <Line maxWidth={48} />
      </Row>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail showNumbers />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" showNumbers />
        <Column marginBottom="l">
          <Mailchimp newsletter={newsletter} />
        </Column>
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" thumbnail showNumbers />
      </Column>
    </Column>
  );
}
