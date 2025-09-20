import { Column, Heading, Text, Meta } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Page Not Found - Aryan Techie",
    description: "The page you're looking for doesn't exist. Explore Aryan Techie's portfolio, blog posts, and projects on code, creativity, and digital wellness.",
    baseURL: baseURL,
    path: "/404",
  });
}

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Page Not Found
      </Heading>
      <Text onBackground="neutral-weak">The page you are looking for does not exist.</Text>
    </Column>
  );
}
