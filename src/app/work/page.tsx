import { Column, Meta, Schema, Heading, Row, Line } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="m" variant="display-strong-s" align="center">
        {work.title}
      </Heading>
      {work.subtitle && (
        <Heading marginBottom="xl" variant="heading-default-l" as="h2" onBackground="neutral-weak" align="center">
          {work.subtitle}
        </Heading>
      )}
      <Row fillWidth horizontal="center" marginBottom="xl">
        <Line maxWidth={48} />
      </Row>
      <Projects />
    </Column>
  );
}
