import { Flex, Meta, Schema, Heading, Column, Row, Line } from "@once-ui-system/core";
import MasonryGrid from "../../components/gallery/MasonryGrid";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="m" paddingTop="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="m" variant="display-strong-s" align="center">
        {gallery.title}
      </Heading>
      {gallery.subtitle && (
        <Heading marginBottom="xl" variant="heading-default-l" as="h2" onBackground="neutral-weak" align="center">
          {gallery.subtitle}
        </Heading>
      )}
      <Row fillWidth horizontal="center" marginBottom="xl">
        <Line maxWidth={48} />
      </Row>
      <MasonryGrid />
    </Column>
  );
}
