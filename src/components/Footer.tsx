import {
  Button,
  Column,
  Icon,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { person, social } from "@/resources";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Organize social links into meaningful groups with specific order
  const connectOrder = ['LinkedIn', 'GitHub', 'Email'];
  const socialOrder = ['Discord', 'Substack', 'ProductHunt'];
  const followOrder = ['YouTube', 'Instagram', 'X (Twitter)'];
  
  const followLinks = followOrder
    .map(name => social.find(item => item.name === name && item.link))
    .filter((item): item is typeof social[0] => !!item);
  
  const connectLinks = connectOrder
    .map(name => social.find(item => item.name === name && item.link))
    .filter((item): item is typeof social[0] => !!item);
  
  const socialLinks = socialOrder
    .map(name => social.find(item => item.name === name && item.link))
    .filter((item): item is typeof social[0] => !!item);

  return (
    <Column 
      as="footer" 
      gap="40" 
      fillWidth 
      paddingY="xl" 
      paddingX="24"
      background="brand-weak"
      border="neutral-medium"
      borderStyle="solid"
    >
      <Row fillWidth horizontal="center" gap="64" wrap paddingX="2">
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Navigate
          </Row>
          <Row>
            <SmartLink href="/">Home</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/about">About</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/work">Work</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/blog">Blog</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/gallery">Gallery</SmartLink>
          </Row>
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Projects
          </Row>
          <Row>
            <SmartLink href="/work/argon">Argon</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/work/ashes">Ashes</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/work/smartscroll">SmartScroll</SmartLink>
          </Row>
          <Row>
            <SmartLink href="/work/weekly-commits">Weekly Commits</SmartLink>
          </Row>
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Resources
          </Row>
          <Row>
            <SmartLink href="/api/rss">RSS Feed</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://aroice.in">AROICE</SmartLink>
          </Row>
        <Row>
            <SmartLink href="https://youtube.com/@aroicex">AROICE X</SmartLink>
          </Row>
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Connect
          </Row>
          {connectLinks.map(
            (item) => (
              <Button 
                key={item.name}
                href={item.link} 
                size="s" 
                variant="secondary" 
                weight="default" 
                prefixIcon={item.icon} 
                label={item.name} 
              />
            ),
          )}
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Social
          </Row>
          {socialLinks.map(
            (item) => (
              <Button 
                key={item.name}
                href={item.link} 
                size="s" 
                variant="secondary" 
                weight="default" 
                prefixIcon={item.icon} 
                label={item.name} 
              />
            ),
          )}
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Follow
          </Row>
          {followLinks.map(
            (item) => (
              <Button 
                key={item.name}
                href={item.link} 
                size="s" 
                variant="secondary" 
                weight="default" 
                prefixIcon={item.icon} 
                label={item.name} 
              />
            ),
          )}
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="4" marginBottom="8">
            Support
          </Row>
          <Row>
            <SmartLink href="https://aroice.in/donate/">Donate</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://razorpay.me/@aroice">Razorpay</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://buymeacoffee.com/aroice">Buy Me a Coffee</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://github.com/sponsors/aryan-techie">GitHub Sponsors</SmartLink>
          </Row>
        </Column>
      </Row>
      <Row fillWidth textVariant="label-default-s" gap="12" horizontal="center" paddingBottom="xl" show="s">
        <Text onBackground="neutral-weak">© {currentYear}</Text>
        <Text>•</Text>
        <Text>{person.name}</Text>
        <Text>•</Text>
        <Text onBackground="neutral-weak">All rights reserved</Text>
      </Row>
      <Row fillWidth textVariant="label-default-s" gap="12" horizontal="center" hide="s">
        <Text onBackground="neutral-weak">© {currentYear}</Text>
        <Text>•</Text>
        <Text>{person.name}</Text>
        <Text>•</Text>
        <Text onBackground="neutral-weak">All rights reserved</Text>
      </Row>
    </Column>
  );
};
